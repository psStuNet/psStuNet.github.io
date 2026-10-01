import re
import os

# 初始化字典，用于存储IP地址的数据使用情况
ip_data_usage = {}

# 正则表达式匹配IP地址
ip_pattern = re.compile(r'IP 地址：(\d{1,3}(?:\.\d{1,3}){3})')

# 正则表达式匹配数据使用量，\s* 兼容空格数量变化
data_usage_pattern = re.compile(
    r'总输出数据大小:\s*(\d+)\s*字节，总输入数据大小:\s*(\d+)\s*字节'
)

# 指定日志文件所在的文件夹路径
log_folder_path = './server_log'


def read_text(file_path):
    """自动尝试常见编码读取日志文件"""
    with open(file_path, 'rb') as f:
        raw = f.read()

    # 先处理 BOM
    if raw.startswith(b'\xef\xbb\xbf'):
        return raw.decode('utf-8-sig')
    if raw.startswith(b'\xff\xfe') or raw.startswith(b'\xfe\xff'):
        return raw.decode('utf-16')

    # 优先 UTF-8，失败后尝试中文 Windows 常见编码
    for enc in ('utf-8', 'gb18030', 'gbk'):
        try:
            return raw.decode(enc)
        except UnicodeDecodeError:
            continue

    # 最后兜底，避免程序中断，但可能丢失少量字符
    return raw.decode('utf-8', errors='ignore')


# 遍历文件夹中的所有文件
for filename in os.listdir(log_folder_path):
    if filename.startswith('vpn_') and filename.endswith('.log'):
        file_path = os.path.join(log_folder_path, filename)
        print(f"正在处理文件: {file_path}")

        text = read_text(file_path)
        current_ip = None

        for line in text.splitlines():
            # 提取 IP 地址
            ip_match = ip_pattern.search(line)
            if ip_match:
                current_ip = ip_match.group(1)
                ip_data_usage.setdefault(
                    current_ip, {'upload': 0, 'download': 0}
                )

            # 提取数据使用量，只加到当前 IP
            data_match = data_usage_pattern.search(line)
            if data_match and current_ip:
                upload = int(data_match.group(1))
                download = int(data_match.group(2))

                ip_data_usage[current_ip]['upload'] += upload
                ip_data_usage[current_ip]['download'] += download


def format_size(bytes_count):
    if bytes_count == 0:
        return "0 B"
    for unit in ["B", "KB", "MB", "GB", "TB"]:
        if bytes_count < 1024:
            return f"{bytes_count:.2f} {unit}"
        bytes_count /= 1024
    return f"{bytes_count:.2f} TB"


# 输出到控制台
for ip, usage in ip_data_usage.items():
    print(f"IP地址: {ip}")
    print(f"上传数据量: {format_size(usage['upload'])}")
    print(f"下载数据量: {format_size(usage['download'])}")
    print("------------------------")

# 将结果保存到文件，建议指定 utf-8
with open('data_usage_results.txt', 'w', encoding='utf-8') as result_file:
    for ip, usage in ip_data_usage.items():
        result_file.write(f"IP地址: {ip}\n")
        result_file.write(f"上传数据量: {format_size(usage['upload'])}\n")
        result_file.write(f"下载数据量: {format_size(usage['download'])}\n")
        result_file.write("------------------------\n")

print("所有日志文件处理完成，结果已保存到 data_usage_results.txt 文件中。")


# Kubuntu Terminal Commands Guide

## Basic Commands

- `pwd` - Print Working Directory ```sh pwd ```
- `ls` - List directory contents ```sh ls ```
- `cd` - Change Directory ```sh cd /path/to/directory ```
- `mkdir` - Make directories ```sh mkdir new_directory ```
- `rm` - Remove files or directories ```sh rm file rm -r directory ```
- `cp` - Copy files and directories ```sh cp source_file destination_file ```
- `mv` - Move/rename files and directories ```sh mv old_name new_name ```
- `cat` - Concatenate and display file content ```sh cat file ```
- `nano` - Edit files with Nano editor ```sh nano file ```
- `touch` - Create empty files or change file timestamps ```sh touch file ```

## System Information and Management

- `uname` - Print system information ```sh uname -a ```
- `top` - Display task manager ```sh top ```
- `htop` - Interactive process viewer ```sh htop ```
- `df` - Report file system disk space usage ```sh df -h ```
- `du` - Estimate file space usage ```sh du -h ```
- `free` - Display memory usage ```sh free -h ```
- `uptime` - Show how long the system has been running ```sh uptime ```
- `ps` - Report a snapshot of current processes ```sh ps aux ```
- `kill` - Terminate a process ```sh kill PID ```
- `killall` - Kill processes by name ```sh killall process_name ```

## Package Management

- `sudo apt update` - Update package lists ```sh sudo apt update ```
- `sudo apt upgrade` - Upgrade all packages ```sh sudo apt upgrade ```
- `sudo apt install` - Install packages ```sh sudo apt install package_name ```
- `sudo apt remove` - Remove packages ```sh sudo apt remove package_name ```
- `sudo apt autoremove` - Remove unnecessary packages ```sh sudo apt autoremove ```
- `sudo apt search` - Search for packages ```sh sudo apt search package_name ```
- `sudo apt show` - Show package details ```sh sudo apt show package_name ```

## File Permissions and Ownership

- `chmod` - Change file modes or Access Control Lists ```sh chmod 755 file ```
- `chown` - Change file owner and group ```sh chown owner:group file ```

## Networking

- `ping` - Send ICMP ECHO_REQUEST to network hosts ```sh ping 8.8.8.8 ```
- `ifconfig` - Configure network interfaces ```sh ifconfig ```
- `ip` - Show/manipulate routing, devices, policy routing, and tunnels ```sh ip addr show ```
- `netstat` - Print network connections, routing tables, interface statistics, masquerade connections, and multicast memberships ```sh netstat -tuln ```
- `ss` - Another utility to investigate sockets ```sh ss -tuln ```
- `scp` - Secure copy (remote file copy program) ```sh scp file user@remote_host:/path/to/destination ```
- `ssh` - OpenSSH SSH client (remote login program) ```sh ssh user@remote_host ```

## Disk Usage

- `df` - Report file system disk space usage ```sh df -h ```
- `du` - Estimate file space usage ```sh du -h ```

## Searching and Sorting

- `grep` - Print lines that match patterns ```sh grep "pattern" file ```
- `find` - Search for files in a directory hierarchy ```sh find /path -name "filename" ```
- `sort` - Sort lines of text files ```sh sort file ```
- `locate` - Find files by name ```sh locate filename ```

## System Updates and Upgrades

- `sudo apt update` - Update package lists ```sh sudo apt update ```
- `sudo apt upgrade` - Upgrade all packages ```sh sudo apt upgrade ```
- `sudo apt dist-upgrade` - Upgrade the system by removing or installing packages as necessary ```sh sudo apt dist-upgrade ```
- `sudo apt autoremove` - Remove unnecessary packages ```sh sudo apt autoremove ```

## Text Processing

- `cat` - Concatenate and display file content ```sh cat file ```
- `less` - View file content ```sh less file ```
- `more` - View file content page by page ```sh more file ```
- `head` - Output the first part of files ```sh head file ```
- `tail` - Output the last part of files ```sh tail file ```
- `awk` - Pattern scanning and processing language ```sh awk '{print $1}' file ```
- `sed` - Stream editor for filtering and transforming text ```sh sed 's/old/new/g' file ```

## Others

- `alias` - Create an alias for a command ```sh alias ll='ls -la' ```
- `history` - Show command history ```sh history ```
- `echo` - Display a line of text ```sh echo "Hello, world!" ```
- `env` - Show environment variables ```sh env ```

# Ubuntu Terminal Commands Guide

## Basic Commands

- `pwd` - Print Working Directory
- `ls` - List directory contents
- `cd` - Change Directory
- `mkdir` - Make directories
- `rm` - Remove files or directories
- `cp` - Copy files and directories
- `mv` - Move/rename files and directories
- `cat` - Concatenate and display file content
- `nano` - Edit files with Nano editor
- `touch` - Create empty files or change file timestamps

## System Information and Management

- `uname` - Print system information
- `top` - Display task manager
- `htop` - Interactive process viewer (may need to be installed)
- `df` - Report file system disk space usage
- `du` - Estimate file space usage
- `free` - Display memory usage
- `uptime` - Show how long the system has been running
- `ps` - Report a snapshot of current processes
- `kill` - Terminate a process
- `killall` - Kill processes by name
- `echo $XDG_SESSION_TYPE` - Check the current display server

## Package Management

- `sudo apt update` - Update package lists
- `sudo apt upgrade` - Upgrade all packages
- `sudo apt install` - Install packages
- `sudo apt remove` - Remove packages
- `sudo apt autoremove` - Remove unnecessary packages
- `sudo apt search` - Search for packages
- `sudo apt show` - Show package details

## File Permissions and Ownership

- `chmod` - Change file modes or Access Control Lists
- `chown` - Change file owner and group

## Networking

- `ping` - Send ICMP ECHO_REQUEST to network hosts
- `ifconfig` - Configure network interfaces (deprecated, use `ip` instead)
- `ip` - Show/manipulate routing, devices, policy routing, and tunnels
- `netstat` - Print network connections, routing tables, interface statistics, masquerade connections, and multicast memberships (deprecated, use `ss` instead)
- `ss` - Another utility to investigate sockets
- `scp` - Secure copy (remote file copy program)
- `ssh` - OpenSSH SSH client (remote login program)

## Disk Usage

- `df` - Report file system disk space usage
- `du` - Estimate file space usage

## Searching and Sorting

- `grep` - Print lines that match patterns
- `find` - Search for files in a directory hierarchy
- `sort` - Sort lines of text files
- `locate` - Find files by name

## System Updates and Upgrades

- `sudo apt update` - Update package lists
- `sudo apt upgrade` - Upgrade all packages
- `sudo apt dist-upgrade` - Upgrade the system by removing or installing packages as necessary
- `sudo apt autoremove` - Remove unnecessary packages

## Text Processing

- `cat` - Concatenate and display file content
- `less` - View file content
- `more` - View file content page by page
- `head` - Output the first part of files
- `tail` - Output the last part of files
- `awk` - Pattern scanning and processing language
- `sed` - Stream editor for filtering and transforming text

## Firewall Management

- `sudo ufw enable` - Enable the firewall
- `sudo ufw disable` - Disable the firewall
- `sudo ufw status` - Check the firewall status
- `sudo ufw allow ssh` - Allow SSH connections
- `sudo ufw allow 8080` - Allow connections on port 8080
- `sudo ufw deny 8080` - Deny connections on port 8080
- `sudo ufw reset` - Reset firewall rules

## Others

- `alias` - Create an alias for a command
- `history` - Show command history
- `echo` - Display a line of text
- `env` - Show environment variables

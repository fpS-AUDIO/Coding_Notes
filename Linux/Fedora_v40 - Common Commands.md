
# Common Terminal Commands for Fedora

This guide provides a list of common terminal commands for Fedora, useful for performing various tasks such as system updates, package management, file operations, and more.

## 1. System Update

Update the package database and upgrade all installed packages to their latest versions.

```sh
sudo dnf update
```

## 2. Package Management

### Search, Install, and Remove Packages

Search for a package:

```sh
dnf search <package_name>
```

Install a package:

```sh
sudo dnf install <package_name>
```

Remove a package:

```sh
sudo dnf remove <package_name>
```

### List Installed Packages

List all installed packages:

```sh
dnf list installed
```

## 3. File Operations

### Listing and Navigating Directories

List files and directories:

```sh
ls
```

List detailed information:

```sh
ls -l
```

Change directory:

```sh
cd <directory_path>
```

### Creating and Removing Directories

Create a directory:

```sh
mkdir <directory_name>
```

Remove an empty directory:

```sh
rmdir <directory_name>
```

Remove a directory and its contents:

```sh
rm -r <directory_name>
```

### Copying and Moving Files

Copy a file:

```sh
cp <source_file> <destination>
```

Copy a directory:

```sh
cp -r <source_directory> <destination>
```

Move or rename a file/directory:

```sh
mv <source> <destination>
```

### Viewing File Contents

View contents of a file:

```sh
cat <file_name>
```

View file one page at a time:

```sh
less <file_name>
```

## 4. User and Group Management

### Adding and Removing Users

Add a new user:

```sh
sudo adduser <username>
```

Delete a user and their home directory:

```sh
sudo userdel -r <username>
```

### Modifying User Groups

Add a user to a group:

```sh
sudo usermod -aG <group_name> <username>
```

## 5. System Information

### Disk and Memory Usage

Display disk usage:

```sh
df -h
```

Display memory usage:

```sh
free -h
```

### System and CPU Information

Display system information:

```sh
uname -a
```

Display CPU information:

```sh
lscpu
```

## 6. Network Management

### Network Configuration and Routing

Display network configuration:

```sh
ip a
```

Display routing table:

```sh
ip route
```

### Testing Connectivity

Ping a remote host:

```sh
ping <hostname_or_ip>
```

## 7. Process Management

### Viewing and Managing Processes

Display running processes:

```sh
ps aux
```

Kill a process by PID:

```sh
kill <pid>
```

Kill a process by name:

```sh
pkill <process_name>
```

### Monitoring System Activity

Monitor system activity:

```sh
top
```

Interactive process viewer:

```sh
htop
```

## 8. File Compression and Archiving

### Creating and Extracting Archives

Create a tar.gz archive:

```sh
tar -czvf <archive_name>.tar.gz <directory>
```

Extract a tar.gz archive:

```sh
tar -xzvf <archive_name>.tar.gz
```

## 9. Disk Management

### Disk and Partition Information

List block devices:

```sh
lsblk
```

Display disk usage statistics:

```sh
du -sh <directory>
```

### Mounting and Unmounting

Mount a filesystem:

```sh
sudo mount <device> <mount_point>
```

Unmount a filesystem:

```sh
sudo umount <mount_point>
```

## Conclusion

These common terminal commands for Fedora will help you perform various tasks efficiently. Keep this guide handy as a reference for managing your Fedora system from the terminal.

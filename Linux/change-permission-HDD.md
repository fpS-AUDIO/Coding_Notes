# Guide: Changing Ownership and Permissions on a Mounted HDD in Linux

## Introduction

This guide explains how to change ownership and permissions on a mounted HDD in Linux to allow regular users to create and delete files and directories without using `sudo`.

## Steps

1. **Check Current Permissions**

   Open a terminal and list the current permissions of the HDD directory:

   ```sh
   ls -l /media/alexander
   ```

   Example output:

   ```sh
   total 12
   drwxr-xr-x 3 root      root      4096 mag 22 17:23 9073a66a-c3b5-4ed7-a5b3-fceecbde80ed
   drwxrwxrwx 1 alexander alexander 8192 mag 21 22:07 EXTERNAL_USB
   ```

   This shows that `9073a66a-c3b5-4ed7-a5b3-fceecbde80ed` is owned by `root`.

2. **Change Ownership**

   Change the ownership of the directory to your user. Replace `alexander` with your actual username if it's different:

   ```sh
   sudo chown -R alexander:alexander /media/alexander/9073a66a-c3b5-4ed7-a5b3-fceecbde80ed
   ```

3. **Set Permissions**

   Ensure that you have the right permissions to create and delete files and directories:

   ```sh
   sudo chmod -R u+rwx /media/alexander/9073a66a-c3b5-4ed7-a5b3-fceecbde80ed
   ```

4. **Verify Changes**

   Verify the changes by listing the directory details again:

   ```sh
   ls -l /media/alexander
   ```

   Expected output:

   ```sh
   drwxr-xr-x 3 alexander alexander 4096 mag 22 17:23 9073a66a-c3b5-4ed7-a5b3-fceecbde80ed
   drwxrwxrwx 1 alexander alexander 8192 mag 21 22:07 EXTERNAL_USB
   ```

## Summary of Commands

1. Check current permissions:

   ```sh
   ls -l /media/alexander
   ```

2. Change ownership to your user:

   ```sh
   sudo chown -R alexander:alexander /media/alexander/9073a66a-c3b5-4ed7-a5b3-fceecbde80ed
   ```

3. Set appropriate permissions:

   ```sh
   sudo chmod -R u+rwx /media/alexander/9073a66a-c3b5-4ed7-a5b3-fceecbde80ed
   ```

4. Verify changes:

   ```sh
   ls -l /media/alexander
   ```

## Conclusion

By following these steps, you can ensure that your user account has the necessary permissions to manage files and directories on your HDD without needing superuser privileges. This will make it easier to use graphical file managers like Dolphin.

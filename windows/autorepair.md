# Repair windows

In console:

---

```cmd
Dism /Online /Cleanup-Image /RestoreHealth
```

Used in Windows to repair the operating system's image.

**Dism**: Deployment Imaging Service and Management.

**/Online**: specifies that the command should target the running operating system instead of an offline Windows image.

**/Cleanup-Image**: option is used to clean up and manage the Windows image.

**/RestoreHealth**: This tells DISM to check for component store corruption and repair the image automatically.

---

```cmd
sfc /scannow
```

Used to run the System File Checker tool, which scans and repairs protected system files in Windows, replace any corrupted files with correct versions from the cache or installation media.

**sfc**: System File Checker, a utility in Windows that allows users to scan and restore corruptions in Windows system files.

**/scannow**: option tells the System File Checker to immediately scan all protected system files and repair any corrupted files it finds. It replaces corrupted files with a cached copy located in a compressed folder at `%WinDir%\System32\dllcache`.

---

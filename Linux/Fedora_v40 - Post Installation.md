# Fedora 40 Post-Installation Guide

After installing Fedora 40, there are several steps you can take to enhance your system's performance, multimedia capabilities, and user experience. Below is a guide to help you through these steps.

## 1. Make DNF Faster

Modify the DNF configuration to speed up package management.

```sh
sudo nano /etc/dnf/dnf.conf
```

Add the following lines to the configuration file:

```ini
fastestmirror=True
max_parallel_downloads=10
defaultyes=True
keepcache=True
```

## 2. Add RPM Fusion Repositories

RPM Fusion provides additional packages that Fedora does not ship due to licensing issues.

Visit [RPM Fusion](https://rpmfusion.org/) for more details.

Run the following commands to add RPM Fusion repositories:

```sh
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm
sudo dnf install https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
```

Update the core packages:

```sh
sudo dnf update @core
```

## 3. Add Flathub Repository

Flathub provides a wide range of Flatpak applications that are easy to install and manage.

Follow the instructions on [Flatpak Setup for Fedora](https://flatpak.org/setup/Fedora).

Add the Flathub repository:

```sh
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

## 4. Install Multimedia Codecs

To enable applications that use the GStreamer framework and other multimedia software to play restricted codecs, install the necessary packages.

Update multimedia packages without weak dependencies:

```sh
sudo dnf update @multimedia --setopt="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
```

Update sound and video complement packages:

```sh
sudo dnf update @sound-and-video
```

## 5. Install GNOME Tweaks and Extensions

GNOME Tweaks and Extensions provide additional customization options for the GNOME desktop environment.

Install GNOME Tweaks:

```sh
sudo dnf install gnome-tweaks
```

Install GNOME Extensions:

```sh
sudo dnf install gnome-shell-extension*
```

### Recommended GNOME Extensions

1. **Astra Monitor**
   - System resource monitoring on your top bar.
2. **Quick Settings Tweaker**
   - Customize the quick settings menu to your preference.
3. **Privacy Settings**
   - Enhanced privacy controls for your GNOME desktop.
4. **Apps Menu**
   - Provides a classic applications menu for easier navigation.
5. **Places Status Indicator**
   - Quickly access your favorite places from the top bar.
6. **Just Perfection**
   - Fine-tune GNOME Shell to perfection with numerous tweaks.
7. **Top Bar Organizer**
   - Organize and manage the top bar for better accessibility.
8. **Logo Menu**
   - Replace the Activities button with a logo or custom text.
9. **Blur My Shell**
   - Adds a blur effect to the GNOME Shell, enhancing visual appeal.
10. **Caffeine**
    - Prevents your computer from going to sleep or locking the screen.
11. **DDTerm**
    - Drop-down terminal for quick access to the command line.
12. **Color Picker**
    - Easily pick colors from anywhere on your screen.
13. **Dash to Dock**
    - Transforms the GNOME Dash into a highly configurable dock for easier application launching and management.

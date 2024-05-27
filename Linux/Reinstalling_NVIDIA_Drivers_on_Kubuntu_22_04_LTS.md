
# Reinstalling NVIDIA Drivers on Kubuntu 22.04 LTS

## Step 1: Remove Existing NVIDIA Drivers

Open a terminal and run the following commands to remove any existing NVIDIA drivers:

```bash
sudo apt-get purge nvidia*
sudo apt-get autoremove
sudo apt-get autoclean
```

## Step 2: Reboot the System

Reboot your system to ensure all changes take effect:

```bash
sudo reboot
```

## Step 3: Add the Graphics Drivers PPA

After the system reboots, add the Graphics Drivers PPA to ensure you have access to the latest drivers:

```bash
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt-get update
```

## Step 4: Identify the Recommended Driver

Check which NVIDIA driver is recommended for your GPU:

```bash
ubuntu-drivers devices
```

This will list the available drivers. Look for the "recommended" one.

## Step 5: Install the Recommended Driver

For example, if the recommended driver is `nvidia-driver-545`, install it by running:

```bash
sudo apt-get install nvidia-driver-545
```

Replace `nvidia-driver-545` with the version you identified in the previous step.

## Step 6: Reboot the System Again

After installing the driver, reboot your system once more:

```bash
sudo reboot
```

## Step 7: Verify the Installation

Finally, verify that the driver is installed and working correctly by running:

```bash
nvidia-smi
```

This command should display information about your GPU, including the driver version.

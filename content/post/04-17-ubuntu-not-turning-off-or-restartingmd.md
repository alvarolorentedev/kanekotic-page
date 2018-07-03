+++
title = "ubuntu not restarting or turning off"
date =  2016-03-17T09:56:49+02:00
tags = ["daily", "learn"]
+++

Lately I have been getting tired of my operating system just not wanting to reboot or sometimes not turning off. This happens in my version off ubuntu due a problem with the energy management. 
The way to solve this is changing the boot parameters for the operating system. So you will need to follow the next steps:
1. Edit the grub settings file (if you use nano as at the end do CTRL+O to save CTRL+X to close)
```
sudo nano /etc/default/grub
```
2. Eddit the next line to look similar to the next one.
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash acpi=force reboot=pci"
```
3. Call the command line to update the grub (os selector for operating system)
```
sudo update-grub
```
first reboot this will not make any difference but after your first reboot as the computer will boot with the new parameters this should solve the issue.


Disclaimer: this works in my case, every installation in different hardware than the one in my computer could have different outcomes (that i cannot be held accountable for, so use at your discretion), including  booting issues that you might solve by removing the previous parameters before booting Ubuntu from grub.

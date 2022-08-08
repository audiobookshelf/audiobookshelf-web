---
title: Install ABS using Docker
---

---

# Introduction

This guide is proposed as a tutorial giving you everything on hand you need to know for installing ABS using docker.
As there are several ways of getting it, I will divide the guide into sections.  
So, grab yourself a coffee and follow along.  
*(no offense for non-coffee drinkers, just drink whatever you like. I recommend not to drink alcohol tho, you need to remember your passwords.)*  

# Choosing an operating system[OS] 

This part will cover the pros and cons of different operating systems (and hardware).  

First off, docker runs on Linux only, thus you will have to choose a Linux distribution to run docker natively.
For Windows you need middleware to run docker. The most common implementation is docker desktop which relies on Windows Subsystem for Linux[WSL2], so I will cover that part for windows.  

In general, when publishing web apps outside of your local network, I recommend not using your main computer to host those.  
Best would be to have a separate (guest) network, and a small PC/NAS for exposed web apps.  

## Linux

As there are many different Linux distributions and I can't say which one suits best for running ABS on docker, this guide covers installing on Ubuntu server. I personally think it is rather easy and gives most tools needed at hand.  

## Windows

If you are running Windows, I propose using a small PC as (Intel NUC/Raspberry PI) and install Ubuntu server there. These come in cheap as there isn't much cpu/ram needed for running. 1 CPU/2GB RAM work out fine for me. Consider more storage ;)  
Using a mini-PC will also reduce power usage, as you won't run a heavy PC having much overhead for just one service that you may host 24/7.  
Example: I own a high-end gaming pc, if I were to have it run my ABS and I definitely want to stream those audiobooks whilst on the go, I would have to pay around 80€ more per month, just for power consumption.  

However, as you may only use ABS whilst sitting on your PC or you already have it running all the time, I will show you how to get it up and running on Windows too. (Consider that WSL2 has poor file system performance)  


# Installation

This part will guide you through the installation and configuration of docker. I will also cover the installation of Ubuntu server.  

## Prerequisites

These very much depend on your needs.  

For running it at home only, you pretty much just need a PC with Windows/Ubuntu.  

To access ABS from other devices, you need:  
- a computer running Windows/Ubuntu Server  
- a router (fritz.box), DHCP server or similar gateway device. The one from your network provider most likely suits the needs.  

To access ABS from all over the world, you need:  
- a computer running Windows/Ubuntu Server  
- a router (fritz.box), DHCP server or another gateway device. The one from your network provider most likely suits the needs.  
- a registered domain.  
- a static IP or dyndns. For people having DSL-Lite, you'll have to stick to ipv6 and get a 4to6 proxy or have it hosted online. I won't cover setting that up tho.  

For using raspberry pi, you additionally need:  
- A microSD card (9GB minimum, 16GB recommended)  
- A computer with a microSD card drive  
- A Raspberry Pi 4  
- A micro USB-C power cable  
- A monitor with an HDMI interface  
- A micro HDMI cable  
- A USB keyboard  
- A USB Housing for your HDD/SSD (to store your audiobooks)  

For installing an OS on a PC or mini-PC, you additionally need:  
- a USB stick (4GB minimum for installing Ubuntu server, 8GB for installing Windows)  
## Configuring Network and Domain

This is very much individual to everybody's gateway device.  
Firstly, you need to log in to your gateway device, for me it is a fritz.box.  
If you do not know how to do that, open a terminal/cmd and type `ip route`/`ipconfig`. This will show you your network information.  
On Windows it looks like this:  
```bash
ipconfig
Wireless-LAN-Adapter WLAN:  
  
   Connection-specific DNS-Suffix. . : fritz.box  
   IPv6 Address. . . . . . . . . . . : 1234:abcd:12:34:ab:cd::1  
   Link-local IPv6 Address . . . . . : fe80::1234:12:34:7c1d%13  
   IPv4 Address  . . . . . . . . . . : 192.168.0.2  
   Subnet Mask . . . . . . . . . . . : 255.255.255.0  
   Default Gateway . . . . . . . . . : fe80::1234:3:2:a379%13  
                                       192.168.0.1  
  
```
On Ubuntu server it looks like this:  
```bash
ip route  
default via 192.168.0.1 dev eth0 proto dhcp src 192.168.0.2 metric 100  
192.168.0.0/24 dev eth0 proto kernel scope link src 192.168.0.2 metric 100  
192.168.0.1 dev eth0 proto dhcp scope link src 192.168.0.2 metric 100  
```
  
Enter the IP of your *default gateway*/*default via* into your browser and login.  
The credentials needed are most likely written onto your gateway device or your documents.  

Now you will have to head to the *network*, *network devices* or *network connections* tab, choose the docker host and check to always assign the same IPv4 address to it.  
  
If you got a DHCP Server, reserve an IP to the MAC Address of the docker host. You'll find the mac by typing `ip a | grep ether` into the terminal or `ipconfig /all` into Powershell/cmd. It is listed behind *link/ether* on Ubuntu or *physical address* on Windows.  
  
Now install ssh-server into your Ubuntu server.  
```bash
sudo apt-get install openssh-server
```

Book a domain online and point it to your external IP.  
Your external IP is shown on your gateway device, you may also visit [https://www.whatsmyip.org/](https://www.whatsmyip.org/).  
If you have no static IP, create a domain at [freedns.afraid.org](https://freedns.afraid.org/) or other dyndns providers.  
Register your dyndns on your gateway device. Follow [this](https://en.avm.de/service/knowledge-base/dok/FRITZ-Box-7590-AX/30_Setting-up-dynamic-DNS-in-the-FRITZ-Box/) if you got a Fritz.Box.  

## Ubuntu Server
This part will cover the configuration and installation needed to run ABS on docker for Ubuntu Server.  

### Installing Ubuntu Server

For installing on Raspberry Pi follow along this guide: [how-to-install-Ubuntu-desktop-on-raspberry-pi-4](https://ubuntu.com/tutorials/how-to-install-ubuntu-desktop-on-raspberry-pi-4#1-overview)  

To install Ubuntu server, you'll need a bootable USB-stick.  
- On Windows follow [create-a-usb-stick-on-Windows](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview)  
- On Mac follow [create-a-usb-stick-on-macos](https://ubuntu.com/tutorials/create-a-usb-stick-on-macos#1-overview)  
- On Ubuntu follow [create-a-usb-stick-on-Windows](https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu#1-overview)  
  
Insert the USB stick to your computer and start up your boot menu. The shortcut is dependend on your hardware provider, try F12, F10, F2, del, esc or google it. When staring, your computer may also show a brief message stating which key to press.  

Select the USB stick to boot from.  
Select *Try or install Ubuntu*, this will boot up the Ubuntu server installer.  

The installer may notify for updates, so update to the new installer if prompted.  
On *Welcome...* select **English**.  
On *Keyboard configuration* select your keyboard layout.  
For the *type of install*, select **Ubuntu Server**.  
On *Network Connection* leave everything as it is and select **Done**.  
On *Configure proxy* leave everything as it is and select **Done**.  
On *Configure Ubuntu archive mirror* leave everything as it is and select **Done**.  
On *Guided storage configuration* check **Use entire disk** and **Set up this disk as an LVM group**. Make sure to select the correct hard drive/local disk. Double check your configuration and select **Done**.  
On *Confirm destructive action*, select **continue**.  
On *Profile Setup* provide all your data. I recommend writing your password into the *Your name:* text field once, to check if the layout fits.  
Skip everything else by selecting **Done**.  
Ubuntu Server will now install, update and reboot.  
Remove the USB Stick after the installation is finished.    
Now login to your newly created server.  

I am using vim as my editor, if you are new to it, use [vim cheat sheet](https://vim.rtorr.com/) as a reference.  
Use these commands to navigate inside Ubuntu terminal: 
- `cd foldername` to enter a folder.  
- `cd ..` to go back to parent folder.  
- `cd /` takes you back to the root.  
- `pwd` to show current path.  
- `ls` to show content of current folder.  
  

- Connect your USB drive.  

### Installing docker
If you are on Windows open *Windows Powershell* and ssh into the Ubuntu server. Replace username and IP address with the ones from your Ubuntu server:  
```bash
ssh username@Ubuntu-server-ip
```
This makes copy pasting a lot easier, just copy the code provided in this guide and right click into Powershell to paste it.

To install docker run the following inside Ubuntu server:  
*Copied from [docker docs](https://docs.docker.com/engine/install/ubuntu/)*.  
Updating the local repository:  
```bash
sudo apt-get update
```
Installing dependencies for docker:  
```bash
sudo apt-get install ca-certificates curl gnupg lsb-release
```
Adding Docker's official GPG key:  
```bash
sudo mkdir -p /etc/apt/keyrings
```
```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```
Set up the repository:  
```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
Updating the local repository to include docker:   
```
sudo apt-get update
```bash
Installing docker:   
```
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

Now Docker is installed, test the installation running the following:  
```bash
docker run hello-world
```

### Installing Portainer for docker management 
As I do like to view and manage docker from a client using the web, I will show you how to install Portainer.  
ssh into your Ubuntu server.  
  
You may also install the business version of portainer. [sign up at portainer to get a free license](https://www.portainer.io/pricing/take5)  
  
Firstly, you need to create a folder to hold our portainer data. I do like to write full paths on the host side, as this helps finding the data later. This folder will later be mounted to */data* inside of portainer.  
```bash
sudo mkdir /opt/portainer
sudo mkdir /opt/portainer/data
```
Now create your portainer container:  
```bash
sudo docker run -d -p 8000:8000 -p 9443:9443 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v /opt/portainer/data:/data portainer/portainer-ce
```
Explaining the command:  
- `docker run -d` Run container in background and print the container ID  
- `-p 8000:8000 -p 9443:9443` Passing the ports on the host to the ports on the container e.G. `-p host_port:container_port`  
- `--name=portainer` Names our container as Portainer  
- `--restart=always` Makes sure the container gets always restarted. It will now come up after rebooting the server or crashing/updating  
- `-v /var/run/docker.sock:/var/run/docker.sock` Mounting the docker socket from the host into the container, letting portainer manage it.  e.G. `-v /path/on/host:/path/on/container`. This is called a volume in docker  
- `-v /opt/portainer/data:/data` Mounting the folder created with mkdir into Portainer.  
- `portainer/portainer-ce` Specifying the the container image to use.  
Replace `portainer/portainer-ce` with `portainer/portainer-be` for the business edition. You may also switch later.  

Now open your browser and head to **https://Ubuntu-server-ip:9443**, replacing *Ubuntu-server-ip* with the ip from your Ubuntu server.  
You will get the Portainer initialization page. Provide a new username and password.  
If you chose to install the business-edition, you will be promted for the license key.  

### Installing audiobookshelf with nginx reverse proxy manager
Open a browser and head to Portainer. Log in.  
On Portainer, click on **Home** and choose **local**. Click on **Networks**.  
Create a new network by clicking on **Add Network**.  
- **Name**=`Proxy_Network`  
- **Subnet**=`172.30.0.0/24`  
- **Gateway**=`172.30.0.1`  
On Portainer, click on **Home** and choose **local**. Click on **Stacks**.  
Create a new stack by clicking on **Add stack**.  
Provide a name for the stack, I go by `abs_nginx_proxy_manager-stack`.  
As Portainer stacks use docker-compose, paste the docker-compose.yml provided below into the Web editor:  
```bash
#Customize all values by replacing '<SOMENAME>'. Enable Settings by removing '#' only.
#As Portainer adds the stack name to containers, I name containers explicitly.

version: "3.9"
services:
#---NGINX Proxy Manager configuration:
  NPM:
    hostname: NPM
    container_name: NPM
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80' # Public HTTP Port
      - '443:443' # Public HTTPS Port
      - '81:81' # Admin Web Port
      # Add any other Stream port you want to expose
#      - '21:21' # FTP
#    environment:
#      Uncomment the next and previous line if IPv6 is not enabled on your host
#      - DISABLE_IPV6: 'true'
#	   Uncomment the DB_* lines if you want use mariadb as your database
#      - DB_MYSQL_HOST: 'NPM-DB'
#      - DB_MYSQL_PORT: 3306
#      - DB_MYSQL_NAME: '<MYSQL_DATABASE_NAME>'
#      - DB_MYSQL_USER: '<NPM-DB_USER>'
#      - DB_MYSQL_PASSWORD: '<NMP-DB-USER_PASSWORD>'
    volumes:
      - /opt/NPM/data:/data
      - /opt/NPM/letsencrypt:/etc/letsencrypt
#    Uncomment the next lines if you want use mariadb as your database 
#    depends_on:
#      - NPM-DB
    networks:
      Proxy_Network:
        ipv4_address: 172.30.0.2
#      DATABASE_NETWORK:
#        ipv4_address: 172.30.1.2

#---MariaDB configuration:
#  Uncomment the next lines if you want use mariadb as your database
#  NPM-DB:
#    hostname: NPM-DB
#    container_name: NPM-DB
#    image: 'jc21/mariadb-aria:latest'
#    restart: unless-stopped
#    environment:
#      MYSQL_ROOT_PASSWORD: '<MYSQL_ROOT_PASSWORD>'
#      MYSQL_DATABASE: '<MYSQL_DATABASE_NAME>'
#      MYSQL_USER: '<NPM-DB_USER>'
#      MYSQL_PASSWORD: '<NMP-DB-USER_PASSWORD>'
#    volumes:
#      - /opt/NPM/mysql/:/var/lib/mysql
#    networks:
#      DATABASE_NETWORK:
#        ipv4_address: 172.30.1.3



#---Audiobookshelf configuration:
  Audiobookshelf:
    hostname: audiobookshelf
    container_name: audiobookshelf
    image: ghcr.io/advplyr/audiobookshelf:latest
    environment:
      - AUDIOBOOKSHELF_UID=99
      - AUDIOBOOKSHELF_GID=100
    volumes:
      - /opt/ABS/audiobooks:/audiobooks
      - /opt/ABS/podcasts:/podcasts
      - /opt/ABS/config:/config
      - /opt/ABS/metadata:/metadata
    networks:
      Proxy_Network:
        ipv4_address: 172.30.0.3

#---Network settings
networks:
  Proxy_Network:
    name: Proxy_Network
    external: true

#  Uncomment the next lines if you want use mariadb as your database
#  DATABASE_NETWORK:
#    driver: bridge
#    ipam:
#      driver: default
#      config:
#        - subnet: '172.30.1.0/24'
#          gateway: '172.30.1.1'
```
NGINX Proxy Manager and Audiobookshelf are now up and running.  
  
Head to `http://Ubuntu-server-ip:81`.  
Log in to the admin ui of NGINX proxy Manager, the credentials are as follows:  
- **Email**= `admin@example.com`  
- **Password**= `changeme`  
You will be promted to change those credentials, do so!  
Click on **Hosts** -> **Proxy Hosts**.  
Click on **Add Proxy Host**.  
  
On the **Details** tab:  
- **Domain Names** Put in the domain booked for ABS. e.G. `abs.example.invalid`  
- **Scheme**=`http`  
- **Forward Hostname / IP**=`172.30.0.3`  The one set in the docker-compose.yml  
- **Forward Port**=`80`  
- **Cache Assets**= `off`  
- **Block Common Exploits**=`on`  
- **Websockets Support**=`on`  
  
On the SSL tab:  
- **SSL Certifiacte**=`Request a new SSL Certificate`  
- **Force SSL**=`on`  
- **HTTP/2 Support**=`on`  
- **HSTS Enabled**=`on`  
- **HSTS Subdomains**=`off`  
- **Use a DNS Challenge**=`off`  
- **Email Address for Let's Encrypt**=`some@email.tld` Insert your EMail address there.  
- **I Agree to the Let's Encrypt Terms of Service**=`on`  
  

## Windows 10/11
This part covers installing WSL2, *Docker Desktop*, *Portainer*, *ABS* and *NGINX Proxy Manager*.  
### Installing Windows Subsystem for Linux (WSL2)
Installing WLS2 is rather simple, but you must run at least Windows *Version 1903 Build 18362*.  
Download [WSL Linux Kernel Update](https://docs.microsoft.com/de-de/Windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package).  
Open Powershell as administrator and run the following:  
`dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`  
`dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`  
Install the *WSL2 Linux Kernel Update* downloaded before.  
`wsl --set-default-version 2`  
### Installing Docker Desktop
Head to [Docker Desktop](https://www.docker.com/products/docker-desktop/) and download the Windows installer.  
Whilst installing, check "Use WSL2 instead of Hyper-V".  
After installing, restart your computer and open Docker Desktop, head to the settings (gear in the top right corner).  
At the *General* Tab, check *Use Docker Compose V2*. Select *Apply and Restart*.  

Open Windows Powershell:  
Type `wsl` to enter into the linux subsystem.  
Inside wsl you have to use linux commands to navigate and edit files.  
Your Windows files are mounted to the linux under `/mnt/host`.  
Navigate using:  
- `cd foldername` to enter a folder.  
- `cd ..` to go back to parent folder.  
- `cd /` takes you back to the root.  
- `pwd` to show current path.  
- `ls` to show content of current folder.  
- `exit` to get out of wsl.   

If you want to use other hard drives/partitions but c, change directory to `/mnt/host`.  
Type `ls` to list the content, drives/partitions on Windows have letters, those letters will appear here.  
However, if your secondary drive/partition didn't mount automatically follow this steps:  
*Assuming we want to map drive D:*  
```bash
mkdir /mnt/d
mount -t drvfs D: /mnt/d
vi /etc/fstab
```
You can just use `/d` od `d:/` to access those drives from your docker container. E.G. Volume mounting.


### Installing Portainer for docker management 
As I do like to view and manage docker from a client using the web, I will show you how to install Portainer.  
  
You may also install the business version of Portainer. [sign up at portainer to get a free license](https://www.portainer.io/pricing/take5)  
Open Windows Powershell.  
Firstly, you need to create a folder to hold our Portainer data. I do like to write full paths on the host side, as this helps finding the data later. This folder will later be mounted to */data* inside of portainer.  
I do create a separate folder for all the docker container data, you can change this as you like.  
Run the following from Windows Powershell (not in wsl!):  
```bash
mkdir c:/docker_data #Folder for all docker container data. Just my personal preference.
mkdir c:/docker_data/portainer #Folder for all data related to portainer
mkdir c:/docker_data/portainer/data #Folder mounted to the data directory inside portainer. Serves persisting data.
```
  
Now create your Portainer container, running the following from Windows Powershell (not in wsl!):  
```bash
docker run -d -p 8000:8000 -p 9443:9443 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v c:/docker_data/portainer/data:/data portainer/portainer-ce
```
Explaining the command:  
- `docker run -d` Run container in background and print the container ID  
- `-p 8000:8000 -p 9443:9443` Passing the ports on the host to the ports on the container e.G. `-p host_port:container_port`  
- `--name=portainer` Names our container as Portainer  
- `--restart=always` Makes sure the container gets always restarted. It will now come up after rebooting the server or crashing/updating  
- `-v /var/run/docker.sock:/var/run/docker.sock` Mounting the docker socket from the host into the container, letting Portainer manage it.  e.G. `-v /path/on/host:/path/on/container`. This is called a volume in docker  
- `-v /mnt/host/c/docker_data/portainer/data:/data` Mounting the folder created with mkdir into Portainer.  
- `portainer/portainer-ce` Specifying the the container image to use.  
Replace `portainer/portainer-ce` with `portainer/portainer-be` for the business edition. You may also switch later.  
You may get a firewall warning, open the firewall for docker to use.  
  

Now open your browser and head to **https://localhost:9443**.  
You will get the Portainer initialization page. Provide a new username and password.  
If you chose to install the business-edition, you will be promted for the license key.  
  
### Installing audiobookshelf with nginx reverse proxy manager
Open a browser and head to Portainer. Log in.  
On Portainer, click on **Home** and choose **local**. Click on **Networks**.  
Create a new network by clicking on **Add Network**.  
- **Name**=`Proxy_Network`  
- **Subnet**=`172.30.0.0/24`  
- **Gateway**=`172.30.0.1`  
On Portainer, click on **Home** and choose **local**. Click on **Stacks**.  
Create a new stack by clicking on **Add stack**.  
Provide a name for the stack, I go by `abs_nginx_proxy_manager-stack`.  
As Portainer stacks use docker-compose, paste the docker-compose.yml provided below into the Web editor:  
```bash
#Customize all values by replacing '<SOMENAME>'. Enable Settings by removing '#' only.
#As Portainer adds the stack name to containers, I name containers explicitly.

version: "3.9"
services:
#---NGINX Proxy Manager configuration:
  NPM:
    hostname: NPM
    container_name: NPM
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80' # Public HTTP Port
      - '443:443' # Public HTTPS Port
      - '81:81' # Admin Web Port
      # Add any other Stream port you want to expose
#      - '21:21' # FTP
#    environment:
#      Uncomment the next and previous line if IPv6 is not enabled on your host
#      - DISABLE_IPV6: 'true'
#	   Uncomment the DB_* lines if you want use mariadb as your database
#      - DB_MYSQL_HOST: 'NPM-DB'
#      - DB_MYSQL_PORT: 3306
#      - DB_MYSQL_NAME: '<MYSQL_DATABASE_NAME>'
#      - DB_MYSQL_USER: '<NPM-DB_USER>'
#      - DB_MYSQL_PASSWORD: '<NMP-DB-USER_PASSWORD>'
    volumes:
      - c:/docker_data/NPM/data:/data
      - c:/docker_data/NPM/letsencrypt:/etc/letsencrypt
#    Uncomment the next lines if you want use mariadb as your database 
#    depends_on:
#      - NPM-DB
    networks:
      Proxy_Network:
        ipv4_address: 172.30.0.2
#      DATABASE_NETWORK:
#        ipv4_address: 172.30.1.2

#---MariaDB configuration:
#  Uncomment the next lines if you want use mariadb as your database
#  NPM-DB:
#    hostname: NPM-DB
#    container_name: NPM-DB
#    image: 'jc21/mariadb-aria:latest'
#    restart: unless-stopped
#    environment:
#      MYSQL_ROOT_PASSWORD: '<MYSQL_ROOT_PASSWORD>'
#      MYSQL_DATABASE: '<MYSQL_DATABASE_NAME>'
#      MYSQL_USER: '<NPM-DB_USER>'
#      MYSQL_PASSWORD: '<NMP-DB-USER_PASSWORD>'
#    volumes:
#      - /opt/NPM/mysql/:/var/lib/mysql
#    networks:
#      DATABASE_NETWORK:
#        ipv4_address: 172.30.1.3



#---Audiobookshelf configuration:
  Audiobookshelf:
    hostname: audiobookshelf
    container_name: audiobookshelf
    image: ghcr.io/advplyr/audiobookshelf:latest
    environment:
      - AUDIOBOOKSHELF_UID=99
      - AUDIOBOOKSHELF_GID=100
    volumes:
      - c:/docker_data/ABS/audiobooks:/audiobooks
      - c:/docker_data/ABS/podcasts:/podcasts
      - c:/docker_data/ABS/config:/config
      - c:/docker_data/ABS/metadata:/metadata
    networks:
      Proxy_Network:
        ipv4_address: 172.30.0.3

#---Network settings
networks:
  Proxy_Network:
    name: Proxy_Network
    external: true

#  Uncomment the next lines if you want use mariadb as your database
#  DATABASE_NETWORK:
#    driver: bridge
#    ipam:
#      driver: default
#      config:
#        - subnet: '172.30.1.0/24'
#          gateway: '172.30.1.1'
```
NGINX Proxy Manager and Audiobookshelf are now up and running.  
  
Head to `http://localhost:81`.  
Log in to the admin ui of NGINX proxy Manager, the credentials are as follows:  
- **Email**= `admin@example.com`  
- **Password**= `changeme`  
You will be promted to change those credentials, do so!  
Click on **Hosts** -> **Proxy Hosts**.  
Click on **Add Proxy Host**.  
  
On the **Details** tab:  
- **Domain Names** Put in the domain booked for ABS. e.G. `ABS.example.invalid`  
- **Scheme**=`http`  
- **Forward Hostname / IP**=`172.30.0.3`  The one set in the docker-compose.yml  
- **Forward Port**=`80`  
- **Cache Assets**= `off`  
- **Block Common Exploits**=`on`  
- **Websockets Support**=`on`  
  
On the SSL tab:  
- **SSL Certifiacte**=`Request a new SSL Certificate`  
- **Force SSL**=`on`  
- **HTTP/2 Support**=`on`  
- **HSTS Enabled**=`on`  
- **HSTS Subdomains**=`off`  
- **Use a DNS Challenge**=`off`  
- **Email Address for Let's Encrypt**=`some@email.tld` Insert your EMail address there.  
- **I Agree to the Let's Encrypt Terms of Service**=`on`  
  
If you have no domain handy and you want to test NPM to access ABS. Open your Editor as admin and open `c:\Windows\system32\drivers\etc\host`.  
You might have to change from only viewing .txt to all files.  
Insert `127.0.0.1             abstest` at the end of your hosts file.  
Open NPM and add a new proxy host:  
On the **Details** tab:  
- **Domain Names**=`abstest`  
- **Scheme**=`http`  
- **Forward Hostname / IP**=`172.30.0.3`  The one set in the docker-compose.yml  
- **Forward Port**=`80`  
- **Cache Assets**= `off`  
- **Block Common Exploits**=`on`  
- **Websockets Support**=`on`  
  
Leave the SSL tab be, you don't need a certificate to test the connection on http.  
Open your browser and type `http://abstest/`, this should take you to the setup page of ABS now.
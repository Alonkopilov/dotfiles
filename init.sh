#!/bin/bash

# Install dependencies
sudo apt update
sudo apt install -y i3 rofi polybar picom arandr trash-cli
wget https://github.com/gokcehan/lf/releases/download/r28/lf-linux-amd64.tar.gz -P ~/Downloads && \
	tar -xf ~/Downloads/lf*.tar.gz -C ~/Downloads && \
	sudo mv ~/Downloads/lf /usr/bin && \
	rm ~/Downloads/lf*.tar.gz

# Create links
ln -fs ~/dotfiles/.bashrc ~
ln -fs ~/dotfiles/.zshrc ~
ln -fs ~/dotfiles/.zshenv ~
ln -fs ~/dotfiles/.fonts/ ~
ln -fs ~/dotfiles/.spicetify/ ~
ln -fs ~/dotfiles/.oh-my-zsh/ ~

ln -fs ~/dotfiles/.config/i3/ ~/.config/
ln -fs ~/dotfiles/.config/neofetch/ ~/.config/
ln -fs ~/dotfiles/.config/picom/ ~/.config/
ln -fs ~/dotfiles/.config/polybar/ ~/.config/
ln -fs ~/dotfiles/.config/rofi/ ~/.config/

# Install zsh plugin
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# Enable spotify-listener for polybar
systemctl --user enable spotify-listener
systemctl --user start spotify-listener

# Install font for terminal
TERMINAL_FONT='FiraCode NF 11'
dconf write "/org/gnome/terminal/legacy/profiles:/$(dconf list '/org/gnome/terminal/legacy/profiles:/')font" "'$TERMINAL_FONT'"

echo "Installation Complete, reboot your machine."

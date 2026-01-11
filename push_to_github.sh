#!/bin/bash

# Force Push to GitHub Script for macOS/Linux

echo "==================================================="
echo "     FORCE PUSHING TO GITHUB..."
echo "==================================================="
echo ""
echo "NOTE: This will overwrite the online repository with your local code."
echo "(This is necessary because the online repo likely has a README that caused a conflict)"
echo ""
echo "Please enter your GitHub login details if prompted..."
echo ""

# Ensure credential helper is set to osxkeychain for convenience
git config credential.helper osxkeychain

# Push to origin main with force
git push -u origin main --force

# Pause equivalent (read any key)
read -n 1 -s -r -p "Press any key to continue..."
echo ""

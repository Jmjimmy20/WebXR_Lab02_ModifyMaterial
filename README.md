# WebXR Learning Labs

A collection of practical experiments focused on learning WebXR technologies, Three.js, WebVR, WebAR, and interactive 3D experiences for the web.

The goal of this repository series is to document my learning journey while building small prototypes and experiments that progressively explore the capabilities of modern web-based immersive technologies.

---

# Lab 02 - 3D Modify Material

## Overview

This second experiment introduces how to modify some parameters of a shape material.

The objective of this lab is to understand how use CSS, HTML and JS; get maeterial variables and set values using a HTML UI.

## What I Learned

- Setting up a basic Three.js using npm
- Create UI using HTML
- Link CSS to modify the HTML UI
- Create variables and link it with UI
- Create EventListeners to set functions
- Rotate shape on Y axis
- Deploy Vite on Git pages

## Features

- Rotate Shape
- Modify Color
- Modify Roughness
- Modify Metalness
- Activate wireframe material

## Purpose

This lab serves as the foundation for future experiments involving:

- WebXR
- Virtual Reality (VR)
- Augmented Reality (AR)
- Interactive 3D environments
- Real-time rendering techniques


## Deploy Vite on GH Pages

To deply a vite page on GH Page:

### 1. Install gh-pages
```
npm install gh-pages --save-dev
```

### 2. Create/edit vite.config.js 
Create or edit vite.config.js on Root
```
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/RepoName/', 
});
```

### 3. Add in script "deploy" on package.json
```
"deploy": "npm run build && gh-pages -d dist"
```

### 4. Corre el deploy
```
npm run deploy
```

## Update and deply
Whenever I make changes and want to update the public site, the flow is:

```
git add .
git commit -m "commit detail"
git push origin main
npm run deploy   
```

## Lab 02 Link

https://jmjimmy20.github.io/WebXR_Lab02_ModifyMaterial/

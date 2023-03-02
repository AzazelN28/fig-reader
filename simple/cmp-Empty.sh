#!/bin/bash
cmp -l -b ./Frame/canvas.fig ./Empty/canvas.fig
cmp -l -b ./Frame+Line/canvas.fig ./Empty/canvas.fig
cmp -l -b ./Frame+ImageSVG/canvas.fig ./Empty/canvas.fig
cmp -l -b ./Frame+Rect/canvas.fig ./Empty/canvas.fig
cmp -l -b ./Frame+Arc/canvas.fig ./Empty/canvas.fig
cmp -l -b ./Frame+Polygon/canvas.fig ./Empty/canvas.fig
cmp -l -b ./Frame+RoundRect/canvas.fig ./Empty/canvas.fig
cmp -l -b ./Frame+Star/canvas.fig ./Empty/canvas.fig
cmp -l -b ./Frame+ImagePNG/canvas.fig ./Empty/canvas.fig
cmp -l -b ./Frame+Ellipse/canvas.fig ./Empty/canvas.fig

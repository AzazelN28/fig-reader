#!/bin/bash
cmp -l -b ./Frame+Line/canvas.fig ./Frame/canvas.fig
cmp -l -b ./Frame+ImageSVG/canvas.fig ./Frame/canvas.fig
cmp -l -b ./Frame+Rect/canvas.fig ./Frame/canvas.fig
cmp -l -b ./Frame+Arc/canvas.fig ./Frame/canvas.fig
cmp -l -b ./Frame+Polygon/canvas.fig ./Frame/canvas.fig
cmp -l -b ./Frame+RoundRect/canvas.fig ./Frame/canvas.fig
cmp -l -b ./Frame+Star/canvas.fig ./Frame/canvas.fig
cmp -l -b ./Frame+ImagePNG/canvas.fig ./Frame/canvas.fig
cmp -l -b ./Frame+Ellipse/canvas.fig ./Frame/canvas.fig

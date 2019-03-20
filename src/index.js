import Regl from 'regl';

import identity from './utils/identity';
import inverse from './utils/inverse';
import multiply from './utils/multiply';
import perspective from './utils/perspective';
import translate from './utils/translate';
import xRotation from './utils/xRotation';
import yRotation from './utils/yRotation';

const regl = Regl();

const drawTriangle = (position) => regl({
  frag: `
    precision mediump float;

    uniform vec4 color;

    void main() {
      gl_FragColor = color;
    }`,
  vert: `
    precision mediump float;

    attribute vec3 position;

    uniform mat4 u_matrix;

    void main() {
      gl_Position = u_matrix * vec4(position, 1);
    }`,

  attributes: {
    position: regl.buffer(position),
  },

  uniforms: {
    color: regl.prop('color'),
    u_matrix: regl.prop('viewProjectionMatrix'),
  },

  count: 3,
});

regl.frame((context) => {
  regl.clear({
    color: [0, 0, 0, 0],
    depth: 1
  });

  const aspect = context.viewportWidth / context.viewportHeight;
  const zNear = 1;
  const zFar = 2000;
  const fov = 60; // degrees

  const projectionMatrix = perspective(fov, aspect, zNear, zFar);

  const cameraAngle = 0;

  let cameraMatrix = identity; // multiply(yRotation(180), xRotation(180));
  cameraMatrix = translate(cameraMatrix, 0, 0, 200);

  const viewMatrix = inverse(cameraMatrix);

  const viewProjectionMatrix = multiply(projectionMatrix, viewMatrix);

  const face = [
    [
      30,   0,  0,
      30,  30,  0,
      60,   0,  0,
    ],
    [
      30,  30,  0,
      60,  30,  0,
      60,   0,  0,
    ],

    [
      30,  30,  0,
      30,  30,  30,
      60,  30,  30,
    ],
    [
      30,  30,  0,
      60,  30,  0,
      60,  30,  30,
    ],

    [
      60,  30,  0,
      60,  30,  30,
      60,  0,  0,
    ],
    [
      60,  30,  30,
      60,  0,  30,
      60,  0,  0,
    ],
  ];

  drawTriangle(face[0])({ color: [1,0,0,1], viewProjectionMatrix });
  drawTriangle(face[1])({ color: [1,0,0,1], viewProjectionMatrix });
  drawTriangle(face[2])({ color: [0,1,0,1], viewProjectionMatrix });
  drawTriangle(face[3])({ color: [0,1,0,1], viewProjectionMatrix });
  drawTriangle(face[4])({ color: [0,0,1,1], viewProjectionMatrix });
  drawTriangle(face[5])({ color: [0,0,1,1], viewProjectionMatrix });
});

// erosion filter
// erosion finds the min value in the neighbourhood
// min of the 5x5 kernel

#version 330 core

in vec2 texCoord;
out vec3 FragColor;

in vec3 color;

uniform sampler2D tex0;
uniform vec2 tc_offset[25];

void main()
{
    vec4 sample[25];
    vec4 minValue = vec4(1.0);

    for (int i = 0; i<25; i++)
    {
        sample[i] = texture(tex0, texCoord + tc_offset[i]);
        minValue = min(sample[i], minValue);
    }

    FragColor = minValue.rgb;
}
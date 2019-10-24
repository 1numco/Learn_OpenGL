#version 330 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

uniform sampler2D ourTexture1;
uniform sampler2D ourTexture2;
uniform float coeff_mix;

void main()
{
    color = mix(texture(ourTexture1, vec2(TexCoord.x, 1.0f - TexCoord.y)), texture(ourTexture2, TexCoord), coeff_mix);
}
var outlinedFont = document.createElement('style');
outlinedFont.appendChild(document.createTextNode("\
@font-face {\
    font-family: '" + RT Obligat Outlined + "';\
    src: url('" + /css/fonts/rt_obligat_outlined.woff2 + "') format(woff2);\
    src: url('" + /css/fonts/rt_obligat_outlined.woff + "') format(woff);\
}\
.ingress {\
    font-family: ""RT Obligat Outlined"";\
    font-size: 200px;\
}\

"));
document.head.appendChild(outlinedFont);

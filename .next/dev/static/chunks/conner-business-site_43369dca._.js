(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/conner-business-site/app/ThemeSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
function ThemeSwitcher(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "9e079fc865445419c413dc5863ffe33932b9af11d564604dc7da9e9c60785825") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9e079fc865445419c413dc5863ffe33932b9af11d564604dc7da9e9c60785825";
    }
    const { theme, onChange } = t0;
    const t1 = `btn ${theme === "theme1" ? "active" : ""}`;
    let t2;
    if ($[1] !== onChange) {
        t2 = ({
            "ThemeSwitcher[<button>.onClick]": ()=>onChange("theme1")
        })["ThemeSwitcher[<button>.onClick]"];
        $[1] = onChange;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== t1 || $[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t1,
            onClick: t2,
            children: "Simple"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/ThemeSwitcher.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[3] = t1;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = `btn ${theme === "theme2" ? "active" : ""}`;
    let t5;
    if ($[6] !== onChange) {
        t5 = ({
            "ThemeSwitcher[<button>.onClick]": ()=>onChange("theme2")
        })["ThemeSwitcher[<button>.onClick]"];
        $[6] = onChange;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== t4 || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t4,
            onClick: t5,
            children: "Contractor"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/ThemeSwitcher.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const t7 = `btn ${theme === "theme3" ? "active" : ""}`;
    let t8;
    if ($[11] !== onChange) {
        t8 = ({
            "ThemeSwitcher[<button>.onClick]": ()=>onChange("theme3")
        })["ThemeSwitcher[<button>.onClick]"];
        $[11] = onChange;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t7 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t7,
            onClick: t8,
            children: "Small Business"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/ThemeSwitcher.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    const t10 = `btn ${theme === "theme4" ? "active" : ""}`;
    let t11;
    if ($[16] !== onChange) {
        t11 = ({
            "ThemeSwitcher[<button>.onClick]": ()=>onChange("theme4")
        })["ThemeSwitcher[<button>.onClick]"];
        $[16] = onChange;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== t10 || $[19] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t10,
            onClick: t11,
            children: "Service"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/ThemeSwitcher.tsx",
            lineNumber: 90,
            columnNumber: 11
        }, this);
        $[18] = t10;
        $[19] = t11;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t12 || $[22] !== t3 || $[23] !== t6 || $[24] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "switcher",
            children: [
                t3,
                t6,
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/ThemeSwitcher.tsx",
            lineNumber: 99,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t3;
        $[23] = t6;
        $[24] = t9;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    return t13;
}
_c = ThemeSwitcher;
var _c;
__turbopack_context__.k.register(_c, "ThemeSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/conner-business-site/app/designs/Theme1Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Theme1Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function Theme1Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "375544a09fa01df1018a22e0f4272e01b5c72e5a10acccac7007d0e265943937") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "375544a09fa01df1018a22e0f4272e01b5c72e5a10acccac7007d0e265943937";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            top: "var(--topbar-height)"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-9 w-9 rounded-xl bg-gradient-to-br from-sky-200 to-blue-300 ring-1 ring-slate-200"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "leading-tight",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm font-semibold",
                            children: "Conner McCarthy Websites"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                            lineNumber: 28,
                            columnNumber: 86
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-slate-500",
                            children: "Web design and Hosting"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                            lineNumber: 28,
                            columnNumber: 155
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 28,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "hidden items-center gap-6 text-sm text-slate-600 md:flex",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "hover:text-slate-900",
                    href: "#work",
                    children: "Work"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 35,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "hover:text-slate-900",
                    href: "#process",
                    children: "Process"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 35,
                    columnNumber: 141
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "hover:text-slate-900",
                    href: "#faq",
                    children: "FAQ"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 35,
                    columnNumber: 204
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "hover:text-slate-900",
                    href: "#contact",
                    children: "Contact"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 35,
                    columnNumber: 259
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 35,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky z-40 border-b border-slate-200/60 bg-white/70 backdrop-blur",
            style: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3",
                children: [
                    t2,
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800",
                            href: "#contact",
                            children: "Get a quote"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                            lineNumber: 42,
                            columnNumber: 236
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                        lineNumber: 42,
                        columnNumber: 195
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 42,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pointer-events-none absolute -right-24 -bottom-28 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    let t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-emerald-500"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 62,
                    columnNumber: 149
                }, this),
                "Small-business websites, built with care"
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "mt-5 text-3xl font-semibold leading-tight tracking-tight md:text-5xl",
            children: "Websites that feel welcoming — and quietly convert."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-base leading-relaxed text-slate-600 md:text-lg",
            children: "Fast, clean, mobile-first sites for real people and real businesses. You’ll get a modern look, clear messaging, and a setup that’s easy to maintain."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
    } else {
        t7 = $[8];
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-7 flex flex-wrap gap-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800",
                href: "#contact",
                children: "Get a quote"
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 75,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 75,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-slate-200 bg-white p-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-semibold",
                    children: "Mobile-first"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 82,
                    columnNumber: 77
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 text-xs text-slate-500",
                    children: "Looks great anywhere"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 82,
                    columnNumber: 126
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 82,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-slate-200 bg-white p-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-semibold",
                    children: "Fast"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 89,
                    columnNumber: 77
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 text-xs text-slate-500",
                    children: "Speed + SEO friendly"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 89,
                    columnNumber: 118
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 89,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative p-8 md:p-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t7,
                    t8,
                    t9,
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid grid-cols-3 gap-3 text-sm",
                        children: [
                            t11,
                            t12,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-slate-200 bg-white p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Support"
                                    }, void 0, false, {
                                        fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                                        lineNumber: 96,
                                        columnNumber: 200
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-xs text-slate-500",
                                        children: "Help when you need it"
                                    }, void 0, false, {
                                        fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                                        lineNumber: 96,
                                        columnNumber: 244
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                                lineNumber: 96,
                                columnNumber: 134
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                        lineNumber: 96,
                        columnNumber: 71
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 96,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 96,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-800",
                    children: "Simple pricing."
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 103,
                    columnNumber: 16
                }, this),
                " ",
                "Clear scope, clear timeline, no surprises."
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-blue-500"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 110,
                    columnNumber: 60
                }, this),
                " Launch-ready"
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-2 w-2 rounded-full bg-indigo-500"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 117,
                    columnNumber: 60
                }, this),
                " Easy edits"
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-6xl px-4 pt-14 md:pt-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",
                children: [
                    t5,
                    t6,
                    t13,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-slate-200 bg-white/70 px-8 py-5 md:px-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 text-sm text-slate-600 md:flex-row md:items-center md:justify-between",
                            children: [
                                t14,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-x-6 gap-y-2",
                                    children: [
                                        t15,
                                        t16,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-2 w-2 rounded-full bg-sky-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 473
                                                }, this),
                                                " Performance minded"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                                            lineNumber: 124,
                                            columnNumber: 424
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                                    lineNumber: 124,
                                    columnNumber: 366
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                            lineNumber: 124,
                            columnNumber: 254
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                        lineNumber: 124,
                        columnNumber: 180
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 124,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    let t19;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-semibold tracking-tight md:text-3xl",
            children: "A calm, simple process"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 max-w-2xl text-slate-600",
            children: "You shouldn’t need to “manage” a website project. Here’s how we keep it easy."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[19] = t18;
        $[20] = t19;
    } else {
        t18 = $[19];
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "process",
            className: "mx-auto max-w-6xl px-4 pt-14 md:pt-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12",
                children: [
                    t18,
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid gap-4 md:grid-cols-3",
                        children: [
                            {
                                n: "01",
                                t: "Quick call or email",
                                d: "You tell me what you do, who you serve, and what you want the site to accomplish."
                            },
                            {
                                n: "02",
                                t: "Design + copy",
                                d: "I draft a clean layout and tighten the message so visitors understand you fast."
                            },
                            {
                                n: "03",
                                t: "Build + launch",
                                d: "We review, make final edits, connect domain/email, and go live with confidence."
                            }
                        ].map(_Theme1HomeAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                        lineNumber: 142,
                        columnNumber: 177
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 142,
                columnNumber: 83
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-semibold tracking-tight md:text-3xl",
            children: "FAQ"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "faq",
            className: "mx-auto max-w-6xl px-4 pt-14 md:pt-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12",
                children: [
                    t21,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-4 md:grid-cols-2",
                        children: [
                            {
                                q: "How fast can we launch?",
                                a: "Most small sites can launch in 1\u20133 weeks depending on content, approvals, and pages."
                            },
                            {
                                q: "Can you help with hosting/domain/email?",
                                a: "Yes \u2014 I\u2019ll guide you through setup (AWS/Cloudflare/etc.) and make sure everything connects cleanly."
                            },
                            {
                                q: "What if I need updates later?",
                                a: "You can request simple edits, or choose a maintenance option depending on how hands-on you want to be."
                            }
                        ].map(_Theme1HomeAnonymous2)
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                        lineNumber: 168,
                        columnNumber: 168
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 168,
                columnNumber: 79
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    let t24;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-semibold tracking-tight md:text-3xl",
            children: "Ready to launch?"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-3 text-white/80",
            children: "Tell me what you do and what you want your website to accomplish. I’ll reply with a quick plan and a straightforward quote."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[24] = t23;
        $[25] = t24;
    } else {
        t23 = $[24];
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t23,
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex flex-wrap gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90",
                            href: "mailto:conner.mccarthy.97@gmail.com",
                            children: "Email | conner.mccarthy.97@gmail.com"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                            lineNumber: 195,
                            columnNumber: 69
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10",
                            href: "tel:+19195250582",
                            children: "Call | (919) 525-0582"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                            lineNumber: 195,
                            columnNumber: 294
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 195,
                    columnNumber: 26
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm font-semibold",
            children: "Questions to answer"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            className: "mx-auto max-w-6xl px-4 py-14 md:py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 text-white shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-10 p-8 md:grid-cols-2 md:p-12",
                    children: [
                        t25,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-3xl border border-white/10 bg-white/5 p-6",
                            children: [
                                t26,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-4 space-y-3 text-sm text-white/80",
                                    children: [
                                        "What do you do?",
                                        "Who is your ideal customer?",
                                        "Do you have a logo/brand colors?",
                                        "Do you have examples you like?"
                                    ].map(_Theme1HomeAnonymous3)
                                }, void 0, false, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                                    lineNumber: 209,
                                    columnNumber: 319
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                            lineNumber: 209,
                            columnNumber: 247
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 209,
                    columnNumber: 186
                }, this)
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 209,
                columnNumber: 83
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gradient-to-b from-blue-50 via-blue-50/95 to-blue-100 text-slate-900",
            children: [
                t4,
                t17,
                t20,
                t22,
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "border-t border-slate-200 bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Conner McCarthy Websites"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                                lineNumber: 216,
                                columnNumber: 328
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-slate-500",
                                children: "Built with Next.js"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                                lineNumber: 216,
                                columnNumber: 392
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                        lineNumber: 216,
                        columnNumber: 193
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                    lineNumber: 216,
                    columnNumber: 138
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    return t28;
}
_c = Theme1Home;
function _Theme1HomeAnonymous3(x) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 inline-block h-5 w-5 shrink-0 rounded-full bg-white/10 text-center text-xs leading-5",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 224,
                columnNumber: 45
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: x
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 224,
                columnNumber: 161
            }, this)
        ]
    }, x, true, {
        fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
        lineNumber: 224,
        columnNumber: 10
    }, this);
}
function _Theme1HomeAnonymous2(f) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-slate-200 bg-slate-50 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-semibold",
                children: f.q
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 227,
                columnNumber: 89
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm leading-relaxed text-slate-600",
                children: f.a
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 227,
                columnNumber: 139
            }, this)
        ]
    }, f.q, true, {
        fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
        lineNumber: 227,
        columnNumber: 10
    }, this);
}
function _Theme1HomeAnonymous(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-3xl border border-slate-200 bg-slate-50 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs font-semibold text-slate-500",
                children: s.n
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 230,
                columnNumber: 89
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-base font-semibold",
                children: s.t
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 230,
                columnNumber: 154
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm leading-relaxed text-slate-600",
                children: s.d
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
                lineNumber: 230,
                columnNumber: 211
            }, this)
        ]
    }, s.n, true, {
        fileName: "[project]/conner-business-site/app/designs/Theme1Home.tsx",
        lineNumber: 230,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Theme1Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/conner-business-site/app/designs/Theme2Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Theme2Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function Theme2Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "0a2d8a14cecdf8afc5faf8e4692539c1f9f57d99035cc12e85298842bebccde2") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0a2d8a14cecdf8afc5faf8e4692539c1f9f57d99035cc12e85298842bebccde2";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            color: "var(--text)",
            background: "var(--bg)"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            top: "var(--topbar-height)"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-9 w-9 rounded-lg bg-white/10",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                    lineNumber: 31,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold tracking-tight",
                            children: "[Company] Plumbing"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                            lineNumber: 31,
                            columnNumber: 125
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-1.5 text-sm opacity-80",
                            children: "· Asheville, NC"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                            lineNumber: 31,
                            columnNumber: 197
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                    lineNumber: 31,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky z-40 border-b border-white/10",
            style: t1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3",
                children: [
                    t2,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-6 text-sm opacity-90 md:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "hover:opacity-100",
                                href: "#services",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                                lineNumber: 38,
                                columnNumber: 231
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "hover:opacity-100",
                                href: "#about",
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                                lineNumber: 38,
                                columnNumber: 293
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "hover:opacity-100",
                                href: "#contact",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                                lineNumber: 38,
                                columnNumber: 349
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                        lineNumber: 38,
                        columnNumber: 161
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100",
                        href: "tel:+15551234567",
                        children: "(555) 123-4567"
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                        lineNumber: 38,
                        columnNumber: 415
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                lineNumber: 38,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium uppercase tracking-widest opacity-70",
            children: "Licensed & insured \xB7 Asheville & surrounding areas"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
            children: "Reliable plumbing when you need it"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto mt-4 max-w-2xl text-lg opacity-90 md:text-xl",
            children: "Repairs, installations, and emergencies. Same-day service when we can—clear pricing, no surprises."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-4xl px-4 pt-14 pb-10 md:pt-20 md:pb-14 text-center",
            children: [
                t4,
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 flex flex-wrap justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100",
                            href: "tel:+15551234567",
                            children: "Call now"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                            lineNumber: 60,
                            columnNumber: 167
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold hover:bg-white/10",
                            href: "#contact",
                            children: "Request service"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                            lineNumber: 60,
                            columnNumber: 346
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "inline-flex items-center justify-center rounded-full border border-amber-400/60 bg-amber-400/10 px-6 py-3 text-sm font-semibold text-amber-300 hover:bg-amber-400/20",
                            href: "tel:+15551234567",
                            children: "Emergency?"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                            lineNumber: 60,
                            columnNumber: 533
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                    lineNumber: 60,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-1.5 w-1.5 rounded-full bg-emerald-400",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                    lineNumber: 67,
                    columnNumber: 59
                }, this),
                "Licensed"
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-1.5 w-1.5 rounded-full bg-emerald-400",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                    lineNumber: 74,
                    columnNumber: 59
                }, this),
                "Insured"
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "h-1.5 w-1.5 rounded-full bg-emerald-400",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                    lineNumber: 81,
                    columnNumber: 60
                }, this),
                "Fast response"
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 81,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "border-t border-white/10 border-b border-white/10 py-4 px-4",
            "aria-label": "Credentials",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-4xl flex-wrap justify-center gap-x-10 gap-y-2 text-sm opacity-90",
                children: [
                    t8,
                    t9,
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-1.5 w-1.5 rounded-full bg-emerald-400",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                                lineNumber: 88,
                                columnNumber: 280
                            }, this),
                            "Upfront pricing"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                        lineNumber: 88,
                        columnNumber: 231
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                lineNumber: 88,
                columnNumber: 117
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "mx-auto max-w-3xl px-4 py-10 text-center md:py-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold tracking-tight md:text-2xl",
                    children: "Why choose us"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                    lineNumber: 95,
                    columnNumber: 93
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-3 text-sm opacity-90",
                    children: "Local, licensed, and focused on doing the job right. We explain options and costs upfront so you can decide with confidence."
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                    lineNumber: 95,
                    columnNumber: 176
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 95,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    let t14;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-center text-2xl font-semibold tracking-tight md:text-3xl",
            children: "What we do"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto mt-2 max-w-xl text-center text-sm opacity-80",
            children: "Residential and light commercial plumbing across Asheville and the area."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[14] = t13;
        $[15] = t14;
    } else {
        t13 = $[14];
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "services",
            className: "mx-auto max-w-6xl px-4 py-10 md:py-16",
            children: [
                t13,
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                    children: [
                        {
                            title: "Drains & sewer",
                            desc: "Clogs, cleanouts, camera inspections."
                        },
                        {
                            title: "Water heaters",
                            desc: "Install, repair, tank & tankless."
                        },
                        {
                            title: "Repairs",
                            desc: "Leaks, pipes, fixtures, toilets."
                        },
                        {
                            title: "Installations",
                            desc: "New fixtures, reroutes, remodels."
                        }
                    ].map(_Theme2HomeAnonymous)
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                    lineNumber: 113,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    let t17;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-semibold tracking-tight md:text-3xl",
            children: "Schedule a job or get a quote"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto mt-3 max-w-md text-sm opacity-90",
            children: "Call, text, or use the form below. We'll get back quickly with availability and a straightforward estimate."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[17] = t16;
        $[18] = t17;
    } else {
        t16 = $[17];
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            className: "mx-auto max-w-4xl px-4 py-14 md:py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center md:px-12 md:py-16",
                children: [
                    t16,
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 flex flex-wrap justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100",
                                href: "tel:+15551234567",
                                children: "(555) 123-4567"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                                lineNumber: 143,
                                columnNumber: 255
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold hover:bg-white/10",
                                href: "mailto:jobs@example.com",
                                children: "jobs@example.com"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                                lineNumber: 143,
                                columnNumber: 440
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                        lineNumber: 143,
                        columnNumber: 197
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 text-xs opacity-70",
                        children: "Serving Asheville, Black Mountain, Hendersonville, and surrounding communities."
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                        lineNumber: 143,
                        columnNumber: 653
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                lineNumber: 143,
                columnNumber: 83
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            color: "var(--text)"
        };
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen",
            style: t0,
            children: [
                t3,
                t7,
                t11,
                t12,
                t15,
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "border-t border-white/10 py-8 px-4 opacity-80",
                    style: t19,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-6xl flex-col gap-2 text-sm text-center md:flex-row md:items-center md:justify-between md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " [Company] Plumbing. Licensed & insured."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                                lineNumber: 159,
                                columnNumber: 294
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "opacity-70",
                                children: "Asheville, NC · (555) 123-4567"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                                lineNumber: 159,
                                columnNumber: 377
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                        lineNumber: 159,
                        columnNumber: 159
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                    lineNumber: 159,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    return t20;
}
_c = Theme2Home;
function _Theme2HomeAnonymous(s) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold",
                children: s.title
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                lineNumber: 167,
                columnNumber: 107
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm opacity-80",
                children: s.desc
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
                lineNumber: 167,
                columnNumber: 151
            }, this)
        ]
    }, s.title, true, {
        fileName: "[project]/conner-business-site/app/designs/Theme2Home.tsx",
        lineNumber: 167,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Theme2Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/conner-business-site/app/ClientThemeShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientThemeShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$app$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/app/ThemeSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$app$2f$designs$2f$Theme1Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/app/designs/Theme1Home.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$app$2f$designs$2f$Theme2Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/app/designs/Theme2Home.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './designs/Theme3Home'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './designs/Theme4Home'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const THEME_PAGES = {
    theme1: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$app$2f$designs$2f$Theme1Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/conner-business-site/app/ClientThemeShell.tsx",
        lineNumber: 12,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    theme2: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$app$2f$designs$2f$Theme2Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/conner-business-site/app/ClientThemeShell.tsx",
        lineNumber: 13,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    theme3: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Theme3Home, {}, void 0, false, {
        fileName: "[project]/conner-business-site/app/ClientThemeShell.tsx",
        lineNumber: 14,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    theme4: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Theme4Home, {}, void 0, false, {
        fileName: "[project]/conner-business-site/app/ClientThemeShell.tsx",
        lineNumber: 15,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0))
};
function ClientThemeShell() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "242b0787352834a364825cc85960d63246319484856d972bbfd3e8d019b68669") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "242b0787352834a364825cc85960d63246319484856d972bbfd3e8d019b68669";
    }
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("theme1");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ClientThemeShell[useEffect()]": ()=>{
                setMounted(true);
            }
        })["ClientThemeShell[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] !== mounted) {
        t2 = ({
            "ClientThemeShell[useEffect()]": ()=>{
                if (!mounted) {
                    return;
                }
                const saved = localStorage.getItem("theme") || "theme1";
                const valid = [
                    "theme1",
                    "theme2",
                    "theme3",
                    "theme4"
                ].includes(saved) ? saved : "theme1";
                setTheme(valid);
                document.documentElement.setAttribute("data-theme", valid);
            }
        })["ClientThemeShell[useEffect()]"];
        t3 = [
            mounted
        ];
        $[3] = mounted;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = function applyTheme(t) {
            setTheme(t);
            localStorage.setItem("theme", t);
            document.documentElement.setAttribute("data-theme", t);
        };
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const applyTheme = t4;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brand text-xl",
            children: "Choose Your Design"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/ClientThemeShell.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== theme) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "topbar",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$app$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    theme: theme,
                    onChange: applyTheme
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/ClientThemeShell.tsx",
                    lineNumber: 87,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/ClientThemeShell.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[8] = theme;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const t7 = mounted ? THEME_PAGES[theme] : THEME_PAGES.theme1;
    let t8;
    if ($[10] !== t6 || $[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t6,
                t7
            ]
        }, void 0, true);
        $[10] = t6;
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    return t8;
}
_s(ClientThemeShell, "/YxLGO+c8I7kOMBdzlTyFey6WwI=");
_c = ClientThemeShell;
var _c;
__turbopack_context__.k.register(_c, "ClientThemeShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/conner-business-site/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/conner-business-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/conner-business-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/conner-business-site/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/conner-business-site/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/conner-business-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/conner-business-site/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/conner-business-site/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=conner-business-site_43369dca._.js.map
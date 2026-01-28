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
    if ($[0] !== "ec9a6045374d9b0a7ebd9c584b1d205e67abf117889c3e048b200ea5655ddde3") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ec9a6045374d9b0a7ebd9c584b1d205e67abf117889c3e048b200ea5655ddde3";
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
"[project]/conner-business-site/app/designs/Theme3Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Theme3Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
function Theme3Home() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "d6cd29a1756c01aabe41e5c6b1778a4a723616ce898180c5acb4b330b4d9983f") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d6cd29a1756c01aabe41e5c6b1778a4a723616ce898180c5acb4b330b4d9983f";
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
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/pjmc-logo.png",
                    alt: "PJMC Logo",
                    width: 120,
                    height: 64,
                    className: "max-h-16 object-contain opacity-90"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                    lineNumber: 22,
                    columnNumber: 51
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-lg font-semibold text-stone-900",
                    children: "Pam McCarthy Catering"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                    lineNumber: 22,
                    columnNumber: 168
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "sticky z-30 border-b border-stone-200/60 bg-white/80 backdrop-blur-sm",
            style: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-4",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-6 text-sm font-medium text-stone-700 md:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "transition-colors hover:text-amber-700",
                                href: "#gallery",
                                children: "Gallery"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                                lineNumber: 29,
                                columnNumber: 280
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "transition-colors hover:text-amber-700",
                                href: "#events",
                                children: "Events"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                                lineNumber: 29,
                                columnNumber: 361
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "transition-colors hover:text-amber-700",
                                href: "#contact",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                                lineNumber: 29,
                                columnNumber: 440
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                        lineNumber: 29,
                        columnNumber: 194
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700",
                        href: "#contact",
                        children: "Get a quote"
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                        lineNumber: 29,
                        columnNumber: 527
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                lineNumber: 29,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/pam-mccarthy-headshot.png",
            alt: "Pam McCarthy",
            width: 160,
            height: 160,
            className: "h-32 w-32 rounded-full object-cover ring-4 ring-amber-200 md:h-40 md:w-40"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl font-bold tracking-tight text-stone-900 md:text-5xl lg:text-6xl",
            children: "Weddings, Parties & Events"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-lg leading-relaxed text-stone-700 md:text-xl",
            children: "Beautiful, delicious catering for your special moments. From intimate gatherings to grand celebrations, we create memorable experiences through exceptional food and service."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-20 md:pb-14",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-6 md:flex-row md:items-start",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-center md:text-left",
                        children: [
                            t4,
                            t5,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-wrap justify-center gap-3 md:justify-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-700",
                                        href: "#contact",
                                        children: "Book your event"
                                    }, void 0, false, {
                                        fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                                        lineNumber: 54,
                                        columnNumber: 297
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-50",
                                        href: "#gallery",
                                        children: "See our work"
                                    }, void 0, false, {
                                        fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                                        lineNumber: 54,
                                        columnNumber: 435
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                                lineNumber: 54,
                                columnNumber: 222
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                        lineNumber: 54,
                        columnNumber: 165
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                lineNumber: 54,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl",
            children: "Our Work"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto mt-3 max-w-xl text-center text-stone-600",
            children: "A glimpse into the beautiful events we've catered."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-[3/4] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/theme3-photo-1-new.png",
                alt: "Catering photo 1",
                width: 900,
                height: 1200,
                className: "h-full w-full object-cover"
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                lineNumber: 72,
                columnNumber: 105
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "aspect-[3/4] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/theme3-photo-2.png",
                alt: "Catering photo 2",
                width: 900,
                height: 1200,
                className: "h-full w-full object-cover"
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                lineNumber: 79,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 79,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "gallery",
            className: "mx-auto max-w-6xl px-4 py-14 md:py-20 scroll-mt-28",
            children: [
                t7,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                    children: [
                        t9,
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-[3/4] overflow-hidden rounded-2xl border border-stone-200 bg-stone-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/theme3-photo-3.png",
                                alt: "Catering photo 3",
                                width: 900,
                                height: 1200,
                                className: "h-full w-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                                lineNumber: 86,
                                columnNumber: 272
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                            lineNumber: 86,
                            columnNumber: 177
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                    lineNumber: 86,
                    columnNumber: 104
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold tracking-tight text-stone-900 md:text-4xl",
                    children: "What We Offer"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                    lineNumber: 93,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto mt-3 max-w-xl text-lg text-stone-600",
                    children: "Premium catering services for every occasion."
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                    lineNumber: 93,
                    columnNumber: 135
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "events",
            className: "mx-auto max-w-6xl px-4 py-14 md:py-20 scroll-mt-28",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 grid gap-6 md:grid-cols-3",
                    children: [
                        {
                            icon: "\uD83D\uDC92",
                            title: "Weddings",
                            desc: "Elegant menus and flawless execution for your special day. From intimate ceremonies to grand receptions."
                        },
                        {
                            icon: "\uD83C\uDF89",
                            title: "Corporate Events",
                            desc: "Professional catering for meetings, conferences, and company celebrations. Impress your guests."
                        },
                        {
                            icon: "\uD83C\uDF82",
                            title: "Private Parties",
                            desc: "Custom menus for birthdays, anniversaries, and special gatherings. We make it memorable."
                        }
                    ].map(_Theme3HomeAnonymous)
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                    lineNumber: 100,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 100,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    let t15;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-center text-3xl font-bold tracking-tight text-stone-900 md:text-4xl",
            children: "Let's Plan Your Event"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mx-auto mt-4 max-w-lg text-center text-lg text-stone-600",
            children: "Tell us about your event and we'll create a custom catering plan that exceeds your expectations."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[15] = t14;
        $[16] = t15;
    } else {
        t14 = $[15];
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            className: "mx-auto max-w-4xl px-4 py-14 md:py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl border border-stone-200 bg-white p-8 shadow-lg md:p-12",
                children: [
                    t14,
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex flex-wrap justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:pam@example.com",
                                className: "rounded-full bg-amber-600 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-700",
                                children: "pam@example.com"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                                lineNumber: 130,
                                columnNumber: 236
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:+15551234567",
                                className: "rounded-full border border-stone-300 bg-white px-8 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-50",
                                children: "(555) 123-4567"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                                lineNumber: 130,
                                columnNumber: 388
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                        lineNumber: 130,
                        columnNumber: 177
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                lineNumber: 130,
                columnNumber: 83
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-[#fff7ed] text-stone-900",
            children: [
                t2,
                t6,
                t11,
                t13,
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "border-t border-stone-200 bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Pam McCarthy Catering"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                                lineNumber: 137,
                                columnNumber: 283
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-stone-500",
                                children: "Serving exceptional events since 2010"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                                lineNumber: 137,
                                columnNumber: 344
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                        lineNumber: 137,
                        columnNumber: 148
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                    lineNumber: 137,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    return t17;
}
_c = Theme3Home;
function _Theme3HomeAnonymous(service, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative overflow-hidden rounded-2xl border-2 border-stone-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                lineNumber: 145,
                columnNumber: 217
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 text-5xl",
                        children: service.icon
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                        lineNumber: 145,
                        columnNumber: 427
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-3 text-xl font-bold text-stone-900",
                        children: service.title
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                        lineNumber: 145,
                        columnNumber: 478
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "leading-relaxed text-stone-600",
                        children: service.desc
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                        lineNumber: 145,
                        columnNumber: 552
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
                lineNumber: 145,
                columnNumber: 401
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/conner-business-site/app/designs/Theme3Home.tsx",
        lineNumber: 145,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Theme3Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/conner-business-site/app/designs/Theme4Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Theme4Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Theme4Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(73);
    if ($[0] !== "eb7a877acef8eaf2eead3c141230b753e5bcf51c0fdce2de9eaf5253c594c655") {
        for(let $i = 0; $i < 73; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "eb7a877acef8eaf2eead3c141230b753e5bcf51c0fdce2de9eaf5253c594c655";
    }
    const [activeTestimonial, setActiveTestimonial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    let faqs;
    let t0;
    let t1;
    let t10;
    let t11;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    let testimonials;
    if ($[1] !== activeTestimonial) {
        testimonials = [
            {
                name: "Sarah M.",
                dog: "Golden Retriever, Max",
                text: "Rick watched Max for a week while we were on vacation. He sent daily photos and updates. Max was so happy when we picked him up!",
                rating: 5
            },
            {
                name: "James T.",
                dog: "French Bulldog, Luna",
                text: "Luna has separation anxiety, but Rick knew exactly how to help her feel comfortable. We couldn't have asked for better care.",
                rating: 5
            },
            {
                name: "Maria L.",
                dog: "Border Collie, Charlie",
                text: "Charlie needs lots of exercise, and Rick made sure he got plenty of walks and playtime. Highly recommend!",
                rating: 5
            }
        ];
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            const services = [
                {
                    icon: "\uD83C\uDFE0",
                    title: "Overnight Stays",
                    desc: "Your dog stays with me or I stay at your place. Same routine, less stress.",
                    features: [
                        "24/7 supervision",
                        "Regular feeding schedule",
                        "Comfortable sleeping area",
                        "Daily exercise"
                    ]
                },
                {
                    icon: "\u2600\uFE0F",
                    title: "Day Care",
                    desc: "Drop off for the day\u2014play, rest, and company while you're at work or out.",
                    features: [
                        "Flexible hours",
                        "Socialization",
                        "Playtime & walks",
                        "Safe environment"
                    ]
                },
                {
                    icon: "\uD83D\uDEB6",
                    title: "Dog Walks",
                    desc: "Regular walks so your dog gets exercise and bathroom breaks on schedule.",
                    features: [
                        "Scheduled walks",
                        "Exercise & fresh air",
                        "Bathroom breaks",
                        "Route variety"
                    ]
                },
                {
                    icon: "\uD83D\uDC8A",
                    title: "Special Care",
                    desc: "Comfortable with medications, special diets, and senior dog needs.",
                    features: [
                        "Medication administration",
                        "Special diets",
                        "Senior care",
                        "Health monitoring"
                    ]
                }
            ];
            faqs = [
                {
                    q: "How far in advance should I book?",
                    a: "I recommend booking at least 2-3 weeks in advance, especially for holidays. However, I often have availability for last-minute requests\u2014just reach out!"
                },
                {
                    q: "Do you take multiple dogs at once?",
                    a: "Yes, I can watch multiple dogs from the same family, or coordinate with you if your dog gets along well with others. I always do a meet-and-greet first."
                },
                {
                    q: "What if my dog has special needs?",
                    a: "I'm experienced with medications, special diets, mobility issues, and senior care. Just let me know your dog's specific needs during booking."
                },
                {
                    q: "Will I get updates while I'm away?",
                    a: "Absolutely! I send daily photos and updates via text or email so you can see how your pup is doing and have peace of mind."
                }
            ];
            t7 = "min-h-screen bg-gradient-to-b from-stone-50 via-amber-50/30 to-stone-50 text-stone-900";
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky z-30 border-b border-stone-200/80 bg-white/95 backdrop-blur-md shadow-sm",
                style: {
                    top: "var(--topbar-height)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 ring-2 ring-amber-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute inset-0 flex items-center justify-center text-lg",
                                        children: "🐕"
                                    }, void 0, false, {
                                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                        lineNumber: 83,
                                        columnNumber: 255
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 83,
                                    columnNumber: 138
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-base font-bold tracking-tight text-stone-900",
                                            children: "Rick Johnson"
                                        }, void 0, false, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 83,
                                            columnNumber: 351
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-xs font-medium text-amber-700",
                                            children: "Dog Sitting Services"
                                        }, void 0, false, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 83,
                                            columnNumber: 444
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 83,
                                    columnNumber: 346
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 83,
                            columnNumber: 97
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition-colors hover:text-amber-700",
                                    href: "#services",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 83,
                                    columnNumber: 628
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition-colors hover:text-amber-700",
                                    href: "#about",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 83,
                                    columnNumber: 711
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition-colors hover:text-amber-700",
                                    href: "#testimonials",
                                    children: "Reviews"
                                }, void 0, false, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 83,
                                    columnNumber: 788
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition-colors hover:text-amber-700",
                                    href: "#faq",
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 83,
                                    columnNumber: 874
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "transition-colors hover:text-amber-700",
                                    href: "#contact",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 83,
                                    columnNumber: 947
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 83,
                            columnNumber: 542
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg hover:from-amber-700 hover:to-amber-800",
                            href: "#contact",
                            children: "Book now"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 83,
                            columnNumber: 1034
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 83,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 81,
                columnNumber: 12
            }, this);
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative mx-auto max-w-7xl px-4 pt-16 pb-20 md:pt-24 md:pb-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 84,
                        columnNumber: 95
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-stone-200/30 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 84,
                        columnNumber: 208
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative grid gap-8 lg:grid-cols-12 lg:gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-3xl border-2 border-stone-200 bg-gradient-to-br from-white via-amber-50/50 to-white p-8 shadow-xl md:p-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-100/50 blur-2xl"
                                        }, void 0, false, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 84,
                                            columnNumber: 571
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "⭐"
                                                        }, void 0, false, {
                                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 860
                                                        }, this),
                                                        " Trusted by 200+ dog owners"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 689
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "mt-6 text-4xl font-bold leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl",
                                                    children: "Your dog's home away from home"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 907
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-5 text-lg leading-relaxed text-stone-600 md:text-xl",
                                                    children: "Reliable, experienced dog sitting from Rick Johnson. Overnight stays, day care, and walks—your pup gets personalized care in a safe, loving environment."
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 1050
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-8 grid grid-cols-2 gap-4 md:grid-cols-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-xl border border-stone-200 bg-white/60 p-3 backdrop-blur-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-2xl",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 1421
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 text-xs font-semibold text-stone-700",
                                                                    children: "Licensed & Insured"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 1454
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 1336
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-xl border border-stone-200 bg-white/60 p-3 backdrop-blur-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-2xl",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 1632
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 text-xs font-semibold text-stone-700",
                                                                    children: "15+ Years Experience"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 1665
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 1547
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-xl border border-stone-200 bg-white/60 p-3 backdrop-blur-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-2xl",
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 1841
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 text-xs font-semibold text-stone-700",
                                                                    children: "Daily Updates"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 1874
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 1756
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 1276
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-8 flex flex-wrap gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "group relative overflow-hidden rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:from-amber-700 hover:to-amber-800",
                                                            href: "#contact",
                                                            children: [
                                                                "Book a stay",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "ml-2 transition-transform group-hover:translate-x-1",
                                                                    children: "→"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                                    lineNumber: 84,
                                                                    columnNumber: 2293
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 2007
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            className: "rounded-full border-2 border-stone-300 bg-white px-8 py-4 text-base font-semibold text-stone-800 transition-all duration-200 hover:border-amber-400 hover:bg-amber-50",
                                                            href: "#rates",
                                                            children: "See rates"
                                                        }, void 0, false, {
                                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 2375
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 1964
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 84,
                                            columnNumber: 663
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 84,
                                    columnNumber: 415
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 84,
                                columnNumber: 384
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative lg:col-span-5 lg:-mt-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-3xl border-2 border-stone-200 bg-gradient-to-br from-stone-100 to-amber-100/50 shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-[4/5] flex items-center justify-center p-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-stone-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-6xl mb-4",
                                                        children: "🐕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 2908
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium",
                                                        children: "Photo of Rick with a happy dog"
                                                    }, void 0, false, {
                                                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 2947
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                lineNumber: 84,
                                                columnNumber: 2864
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 84,
                                            columnNumber: 2797
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-4 -right-4 rounded-2xl border-2 border-white bg-gradient-to-br from-amber-500 to-amber-600 p-4 shadow-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold",
                                                        children: "200+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 3211
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs font-medium",
                                                        children: "Happy Dogs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 3257
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                lineNumber: 84,
                                                columnNumber: 3171
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 84,
                                            columnNumber: 3032
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 84,
                                    columnNumber: 2657
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 84,
                                columnNumber: 2607
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 84,
                        columnNumber: 321
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 84,
                columnNumber: 12
            }, this);
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "services",
                className: "relative mx-auto max-w-7xl px-4 py-16 md:py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold tracking-tight text-stone-900 md:text-4xl",
                                children: "What I offer"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 85,
                                columnNumber: 124
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-3 max-w-2xl text-lg text-stone-600",
                                children: "Flexible options so your dog gets the personalized care that fits their needs and your schedule."
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 85,
                                columnNumber: 218
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 85,
                        columnNumber: 95
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                        children: services.map(_Theme4HomeServicesMap)
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 85,
                        columnNumber: 385
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this);
            $[16] = faqs;
            $[17] = t10;
            $[18] = t7;
            $[19] = t8;
            $[20] = t9;
        } else {
            faqs = $[16];
            t10 = $[17];
            t7 = $[18];
            t8 = $[19];
            t9 = $[20];
        }
        let t12;
        let t13;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold tracking-tight text-stone-900 md:text-4xl",
                children: "About Rick"
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this);
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-lg leading-relaxed text-stone-600",
                children: "I've been around dogs my whole life and have sat for all kinds—puppies to seniors, big and small. I keep things calm, consistent, and fun. Your dog gets plenty of attention, exercise, and rest so you can relax knowing they're in good hands."
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this);
            $[21] = t12;
            $[22] = t13;
        } else {
            t12 = $[21];
            t13 = $[22];
        }
        let t14;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-stone-200 bg-white/60 p-4 text-center backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-amber-700",
                        children: "15+"
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 111,
                        columnNumber: 110
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-xs font-medium text-stone-600",
                        children: "Years Experience"
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 111,
                        columnNumber: 170
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this);
            $[23] = t14;
        } else {
            t14 = $[23];
        }
        let t15;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-stone-200 bg-white/60 p-4 text-center backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-bold text-amber-700",
                        children: "200+"
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 118,
                        columnNumber: 110
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-xs font-medium text-stone-600",
                        children: "Happy Dogs"
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 118,
                        columnNumber: 171
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 118,
                columnNumber: 13
            }, this);
            $[24] = t15;
        } else {
            t15 = $[24];
        }
        let t16;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid grid-cols-3 gap-4",
                children: [
                    t14,
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-stone-200 bg-white/60 p-4 text-center backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-bold text-amber-700",
                                children: "500+"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 125,
                                columnNumber: 165
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 text-xs font-medium text-stone-600",
                                children: "Stays Completed"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 125,
                                columnNumber: 226
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 125,
                        columnNumber: 68
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this);
            $[25] = t16;
        } else {
            t16 = $[25];
        }
        let t17;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t12,
                    t13,
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-8 space-y-3",
                        children: [
                            "Experienced with many breeds and temperaments",
                            "Comfortable with meds and special needs",
                            "Updates and photos so you stay connected",
                            "Licensed, insured, and background checked"
                        ].map(_Theme4HomeAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 132,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 132,
                columnNumber: 13
            }, this);
            $[26] = t17;
        } else {
            t17 = $[26];
        }
        let t18;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-square overflow-hidden rounded-2xl border-2 border-stone-200 bg-gradient-to-br from-stone-100 to-amber-100/50 shadow-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full w-full items-center justify-center text-stone-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-6xl mb-4",
                                children: "👨‍🦱"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 139,
                                columnNumber: 265
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium",
                                children: "Rick (headshot or with dog)"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 139,
                                columnNumber: 307
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 139,
                        columnNumber: 236
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 139,
                    columnNumber: 157
                }, this)
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, this);
            $[27] = t18;
        } else {
            t18 = $[27];
        }
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                className: "relative mx-auto max-w-7xl px-4 py-16 md:py-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-3xl border-2 border-stone-200 bg-gradient-to-br from-white via-amber-50/30 to-white p-8 shadow-xl md:p-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-12 lg:grid-cols-2 lg:items-center",
                        children: [
                            t17,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    t18,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-4 -left-4 rounded-xl border-2 border-white bg-gradient-to-br from-amber-500 to-amber-600 p-3 shadow-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl",
                                                    children: "⭐"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 533
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-bold",
                                                            children: "4.9/5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 572
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs",
                                                            children: "Average Rating"
                                                        }, void 0, false, {
                                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 618
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 567
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 145,
                                            columnNumber: 481
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                        lineNumber: 145,
                                        columnNumber: 344
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 145,
                                columnNumber: 313
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 145,
                        columnNumber: 248
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 145,
                    columnNumber: 92
                }, this)
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 145,
                columnNumber: 13
            }, this);
            $[28] = t11;
        } else {
            t11 = $[28];
        }
        t4 = "testimonials";
        t5 = "relative mx-auto max-w-7xl px-4 py-16 md:py-24";
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold tracking-tight text-stone-900 md:text-4xl",
                        children: "What dog owners say"
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 153,
                        columnNumber: 41
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-3 max-w-xl text-lg text-stone-600",
                        children: "Don't just take my word for it—hear from happy pet parents."
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 153,
                        columnNumber: 142
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 153,
                columnNumber: 12
            }, this);
            $[29] = t6;
        } else {
            t6 = $[29];
        }
        t3 = "mt-12";
        t2 = "relative overflow-hidden rounded-3xl border-2 border-stone-200 bg-gradient-to-br from-white to-amber-50/30 p-8 shadow-xl md:p-12";
        t0 = "grid gap-8 md:grid-cols-3";
        t1 = testimonials.map({
            "Theme4Home[testimonials.map()]": (testimonial, idx_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `rounded-2xl border-2 p-6 transition-all duration-300 ${idx_1 === activeTestimonial ? "border-amber-400 bg-white shadow-lg scale-105" : "border-stone-200 bg-white/60"}`,
                    onMouseEnter: {
                        "Theme4Home[testimonials.map() > <div>.onMouseEnter]": ()=>setActiveTestimonial(idx_1)
                    }["Theme4Home[testimonials.map() > <div>.onMouseEnter]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 flex gap-1",
                            children: [
                                ...Array(testimonial.rating)
                            ].map(_Theme4HomeTestimonialsMapAnonymous)
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 164,
                            columnNumber: 65
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 text-sm leading-relaxed text-stone-700 italic",
                            children: [
                                '"',
                                testimonial.text,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 164,
                            columnNumber: 177
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-stone-200 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-stone-900",
                                    children: testimonial.name
                                }, void 0, false, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 164,
                                    columnNumber: 315
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-stone-500",
                                    children: testimonial.dog
                                }, void 0, false, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 164,
                                    columnNumber: 385
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 164,
                            columnNumber: 267
                        }, this)
                    ]
                }, idx_1, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 162,
                    columnNumber: 65
                }, this)
        }["Theme4Home[testimonials.map()]"]);
        $[1] = activeTestimonial;
        $[2] = faqs;
        $[3] = t0;
        $[4] = t1;
        $[5] = t10;
        $[6] = t11;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
        $[15] = testimonials;
    } else {
        faqs = $[2];
        t0 = $[3];
        t1 = $[4];
        t10 = $[5];
        t11 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
        t9 = $[14];
        testimonials = $[15];
    }
    let t12;
    if ($[30] !== t0 || $[31] !== t1) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 199,
            columnNumber: 11
        }, this);
        $[30] = t0;
        $[31] = t1;
        $[32] = t12;
    } else {
        t12 = $[32];
    }
    let t13;
    if ($[33] !== activeTestimonial || $[34] !== testimonials) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 flex justify-center gap-2",
            children: testimonials.map({
                "Theme4Home[testimonials.map()]": (__0, idx_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "Theme4Home[testimonials.map() > <button>.onClick]": ()=>setActiveTestimonial(idx_2)
                        }["Theme4Home[testimonials.map() > <button>.onClick]"],
                        className: `h-2 rounded-full transition-all ${idx_2 === activeTestimonial ? "w-8 bg-amber-600" : "w-2 bg-stone-300"}`,
                        "aria-label": `View testimonial ${idx_2 + 1}`
                    }, idx_2, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 209,
                        columnNumber: 59
                    }, this)
            }["Theme4Home[testimonials.map()]"])
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[33] = activeTestimonial;
        $[34] = testimonials;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== t12 || $[37] !== t13 || $[38] !== t2) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[36] = t12;
        $[37] = t13;
        $[38] = t2;
        $[39] = t14;
    } else {
        t14 = $[39];
    }
    let t15;
    if ($[40] !== t14 || $[41] !== t3) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t14
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[40] = t14;
        $[41] = t3;
        $[42] = t15;
    } else {
        t15 = $[42];
    }
    let t16;
    if ($[43] !== t15 || $[44] !== t4 || $[45] !== t5 || $[46] !== t6) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: t4,
            className: t5,
            children: [
                t6,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[43] = t15;
        $[44] = t4;
        $[45] = t5;
        $[46] = t6;
        $[47] = t16;
    } else {
        t16 = $[47];
    }
    let t17;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold tracking-tight text-stone-900 md:text-4xl",
                    children: "Frequently asked questions"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 251,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto mt-3 max-w-xl text-lg text-stone-600",
                    children: "Everything you need to know about booking and what to expect."
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 251,
                    columnNumber: 148
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[48] = t17;
    } else {
        t17 = $[48];
    }
    let t18;
    if ($[49] !== faqs) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "faq",
            className: "relative mx-auto max-w-4xl px-4 py-16 md:py-24",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 space-y-4",
                    children: faqs.map(_Theme4HomeFaqsMap)
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 258,
                    columnNumber: 93
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[49] = faqs;
        $[50] = t18;
    } else {
        t18 = $[50];
    }
    let t19;
    let t20;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold tracking-tight text-stone-900 md:text-4xl",
            children: "Simple, clear rates"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-lg text-stone-600",
            children: "Pricing depends on your dog, the type of stay, and length. I'll give you a straightforward quote when you reach out. No hidden fees, no surprises."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[51] = t19;
        $[52] = t20;
    } else {
        t19 = $[51];
        t20 = $[52];
    }
    let t21;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 space-y-3",
            children: [
                "Overnight stays: $50-80/night",
                "Day care: $35-50/day",
                "Dog walks: $20-30/walk",
                "Multi-dog discounts available"
            ].map(_Theme4HomeAnonymous2)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 277,
            columnNumber: 11
        }, this);
        $[53] = t21;
    } else {
        t21 = $[53];
    }
    let t22;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t20,
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl",
                    href: "#contact",
                    children: [
                        "Get a personalized quote",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-2",
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 284,
                            columnNumber: 289
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 284,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        $[54] = t22;
    } else {
        t22 = $[54];
    }
    let t23;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "rates",
            className: "relative mx-auto max-w-7xl px-4 py-16 md:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 via-amber-100/50 to-amber-50 p-8 shadow-xl md:p-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 lg:grid-cols-2 lg:items-center",
                    children: [
                        t22,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border-2 border-amber-200 bg-white p-8 shadow-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl font-bold text-amber-700",
                                        children: "Starting at"
                                    }, void 0, false, {
                                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                        lineNumber: 291,
                                        columnNumber: 424
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-6xl font-bold text-stone-900",
                                        children: "$35"
                                    }, void 0, false, {
                                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                        lineNumber: 291,
                                        columnNumber: 492
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-lg text-stone-600",
                                        children: "per day"
                                    }, void 0, false, {
                                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                        lineNumber: 291,
                                        columnNumber: 557
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 text-sm text-stone-500",
                                        children: "*Final pricing depends on your dog's needs and stay duration"
                                    }, void 0, false, {
                                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                        lineNumber: 291,
                                        columnNumber: 615
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 291,
                                columnNumber: 395
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 291,
                            columnNumber: 317
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 291,
                    columnNumber: 253
                }, this)
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 291,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 291,
            columnNumber: 11
        }, this);
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    let t25;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold tracking-tight text-stone-900 md:text-4xl",
            children: "Book a stay or ask a question"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-lg leading-relaxed text-stone-600",
            children: "Tell me about your dog, dates, and what you need. I'll get back quickly to confirm availability and rates."
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 300,
            columnNumber: 11
        }, this);
        $[56] = t24;
        $[57] = t25;
    } else {
        t24 = $[56];
        t25 = $[57];
    }
    let t26;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "mailto:rick@example.com",
            className: "flex items-center gap-4 rounded-xl border-2 border-stone-200 bg-white p-4 transition-all duration-200 hover:border-amber-400 hover:shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full bg-amber-100 p-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xl",
                        children: "✉️"
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 309,
                        columnNumber: 245
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 309,
                    columnNumber: 198
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold text-stone-900",
                            children: "Email"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 309,
                            columnNumber: 291
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-stone-600",
                            children: "rick@example.com"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 309,
                            columnNumber: 348
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 309,
                    columnNumber: 286
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[58] = t26;
    } else {
        t26 = $[58];
    }
    let t27;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 space-y-4",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "tel:+15551234567",
                    className: "flex items-center gap-4 rounded-xl border-2 border-stone-200 bg-white p-4 transition-all duration-200 hover:border-amber-400 hover:shadow-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-full bg-amber-100 p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: "📞"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 316,
                                columnNumber: 275
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 316,
                            columnNumber: 228
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-stone-900",
                                    children: "Phone"
                                }, void 0, false, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 316,
                                    columnNumber: 321
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-stone-600",
                                    children: "(555) 123-4567"
                                }, void 0, false, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 316,
                                    columnNumber: 378
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 316,
                            columnNumber: 316
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 316,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[59] = t27;
    } else {
        t27 = $[59];
    }
    let t28;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t24,
                t25,
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 rounded-xl border-2 border-amber-200 bg-amber-50/50 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold text-stone-900",
                            children: "Quick response time"
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 323,
                            columnNumber: 109
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-sm text-stone-600",
                            children: "I typically respond within 2-4 hours during business hours. For urgent requests, call directly."
                        }, void 0, false, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 323,
                            columnNumber: 180
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 323,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 323,
            columnNumber: 11
        }, this);
        $[60] = t28;
    } else {
        t28 = $[60];
    }
    let t29;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 font-semibold text-stone-900",
            children: "Send a message"
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[61] = t29;
    } else {
        t29 = $[61];
    }
    let t30;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "contact",
            className: "relative mx-auto max-w-7xl px-4 py-16 md:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-3xl border-2 border-stone-200 bg-gradient-to-br from-white via-stone-50 to-white p-8 shadow-xl md:p-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-12 lg:grid-cols-2",
                    children: [
                        t28,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-lg",
                            children: [
                                t29,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-1 block text-sm font-medium text-stone-700",
                                                    children: "Your name"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 410
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: "w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200",
                                                    placeholder: "John Smith"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 492
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 337,
                                            columnNumber: 405
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-1 block text-sm font-medium text-stone-700",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 699
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    className: "w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200",
                                                    placeholder: "john@example.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 777
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 337,
                                            columnNumber: 694
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-1 block text-sm font-medium text-stone-700",
                                                    children: "Dog's name & breed"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 991
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: "w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200",
                                                    placeholder: "Max, Golden Retriever"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 1086
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 337,
                                            columnNumber: 986
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-1 block text-sm font-medium text-stone-700",
                                                    children: "Dates needed"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 1304
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    className: "w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200",
                                                    placeholder: "March 15-20, 2024"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 1389
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 337,
                                            columnNumber: 1299
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mb-1 block text-sm font-medium text-stone-700",
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 1603
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 4,
                                                    className: "w-full rounded-lg border border-stone-300 px-4 py-2.5 text-sm focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200",
                                                    placeholder: "Tell me about your dog and what you need..."
                                                }, void 0, false, {
                                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 1683
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 337,
                                            columnNumber: 1598
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg",
                                            children: "Send message"
                                        }, void 0, false, {
                                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                            lineNumber: 337,
                                            columnNumber: 1918
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                    lineNumber: 337,
                                    columnNumber: 377
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                            lineNumber: 337,
                            columnNumber: 294
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 337,
                    columnNumber: 245
                }, this)
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 337,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[62] = t30;
    } else {
        t30 = $[62];
    }
    let t31;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "font-bold text-stone-900",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " Rick Johnson Dog Sitting"
                    ]
                }, void 0, true, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 344,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 text-xs text-stone-500",
                    children: "Licensed & Insured"
                }, void 0, false, {
                    fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                    lineNumber: 344,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[63] = t31;
    } else {
        t31 = $[63];
    }
    let t32;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "border-t-2 border-stone-200 bg-gradient-to-b from-white to-stone-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-stone-600 md:flex-row md:items-center md:justify-between",
                children: [
                    t31,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-6 text-stone-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "rick@example.com"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 351,
                                columnNumber: 293
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 351,
                                columnNumber: 322
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "(555) 123-4567"
                            }, void 0, false, {
                                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                                lineNumber: 351,
                                columnNumber: 336
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 351,
                        columnNumber: 240
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 351,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[64] = t32;
    } else {
        t32 = $[64];
    }
    let t33;
    if ($[65] !== t10 || $[66] !== t11 || $[67] !== t16 || $[68] !== t18 || $[69] !== t7 || $[70] !== t8 || $[71] !== t9) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: t7,
            children: [
                t8,
                t9,
                t10,
                t11,
                t16,
                t18,
                t23,
                t30,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[65] = t10;
        $[66] = t11;
        $[67] = t16;
        $[68] = t18;
        $[69] = t7;
        $[70] = t8;
        $[71] = t9;
        $[72] = t33;
    } else {
        t33 = $[72];
    }
    return t33;
}
_s(Theme4Home, "EI8fdptwRB/JQzmgvjqlwePYxw8=");
_c = Theme4Home;
function _Theme4HomeAnonymous2(item_0, idx_4) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 rounded-lg border border-amber-200 bg-white/60 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-amber-600",
                children: "✓"
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 373,
                columnNumber: 114
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-stone-700",
                children: item_0
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 373,
                columnNumber: 155
            }, this)
        ]
    }, idx_4, true, {
        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
        lineNumber: 373,
        columnNumber: 10
    }, this);
}
function _Theme4HomeFaqsMap(faq, idx_3) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: "group rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-md transition-all duration-200 open:border-amber-300 open:shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: "flex cursor-pointer items-center justify-between font-semibold text-stone-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: faq.q
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 376,
                        columnNumber: 274
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-amber-600 transition-transform group-open:rotate-180",
                        children: "▼"
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 376,
                        columnNumber: 294
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 376,
                columnNumber: 175
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-stone-600 leading-relaxed",
                children: faq.a
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 376,
                columnNumber: 388
            }, this)
        ]
    }, idx_3, true, {
        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
        lineNumber: 376,
        columnNumber: 10
    }, this);
}
function _Theme4HomeTestimonialsMapAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-amber-500",
        children: "⭐"
    }, i, false, {
        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
        lineNumber: 379,
        columnNumber: 10
    }, this);
}
function _Theme4HomeAnonymous(item, idx_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-amber-500"
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 382,
                columnNumber: 61
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-stone-700",
                children: item
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 382,
                columnNumber: 134
            }, this)
        ]
    }, idx_0, true, {
        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
        lineNumber: 382,
        columnNumber: 10
    }, this);
}
function _Theme4HomeServicesMap(service, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative overflow-hidden rounded-2xl border-2 border-stone-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-4 -top-4 h-20 w-20 rounded-full bg-amber-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 385,
                columnNumber: 217
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 text-4xl",
                        children: service.icon
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 385,
                        columnNumber: 392
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-stone-900",
                        children: service.title
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 385,
                        columnNumber: 443
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm leading-relaxed text-stone-600",
                        children: service.desc
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 385,
                        columnNumber: 512
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-4 space-y-2",
                        children: service.features.map(_Theme4HomeServicesMapServiceFeaturesMap)
                    }, void 0, false, {
                        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                        lineNumber: 385,
                        columnNumber: 589
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 385,
                columnNumber: 366
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
        lineNumber: 385,
        columnNumber: 10
    }, this);
}
function _Theme4HomeServicesMapServiceFeaturesMap(feature, fIdx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start gap-2 text-xs text-stone-600",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-amber-500"
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 388,
                columnNumber: 83
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: feature
            }, void 0, false, {
                fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
                lineNumber: 388,
                columnNumber: 156
            }, this)
        ]
    }, fIdx, true, {
        fileName: "[project]/conner-business-site/app/designs/Theme4Home.tsx",
        lineNumber: 388,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Theme4Home");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$app$2f$designs$2f$Theme3Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/app/designs/Theme3Home.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$app$2f$designs$2f$Theme4Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/conner-business-site/app/designs/Theme4Home.tsx [app-client] (ecmascript)");
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
    theme3: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$app$2f$designs$2f$Theme3Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/conner-business-site/app/ClientThemeShell.tsx",
        lineNumber: 14,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0)),
    theme4: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$conner$2d$business$2d$site$2f$app$2f$designs$2f$Theme4Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
]);

//# sourceMappingURL=conner-business-site_app_178a2bce._.js.map
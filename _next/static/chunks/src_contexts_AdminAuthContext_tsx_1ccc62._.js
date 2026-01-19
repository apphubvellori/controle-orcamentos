(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_contexts_AdminAuthContext_tsx_1ccc62._.js", {

"[project]/src/contexts/AdminAuthContext.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AdminAuthProvider": ()=>AdminAuthProvider,
    "useAdminAuth": ()=>useAdminAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
'use client';
;
;
const AdminAuthContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
// Helper seguro para localStorage (evita erros de extensões do navegador)
const safeLocalStorage = {
    getItem: (key)=>{
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                return localStorage.getItem(key);
            }
        } catch (e) {
            console.warn('localStorage não disponível:', e);
        }
        return null;
    },
    setItem: (key, value)=>{
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem(key, value);
            }
        } catch (e) {
            console.warn('localStorage não disponível:', e);
        }
    },
    removeItem: (key)=>{
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.removeItem(key);
            }
        } catch (e) {
            console.warn('localStorage não disponível:', e);
        }
    }
};
function AdminAuthProvider({ children }) {
    _s();
    const [isAuthenticated, setIsAuthenticated] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [email, setEmail] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]();
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // Verifica se está autenticado ao carregar
        try {
            const auth = safeLocalStorage.getItem('adminAuth');
            const savedEmail = safeLocalStorage.getItem('adminEmail');
            if (auth === 'true') {
                setIsAuthenticated(true);
                setEmail(savedEmail);
            }
        } catch (e) {
            console.warn('Erro ao verificar autenticação:', e);
        }
        setLoading(false);
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // Protege as rotas admin (exceto login)
        if (!loading) {
            const isAdminRoute = pathname?.startsWith('/admin');
            const isLoginPage = pathname === '/admin/login';
            if (isAdminRoute && !isLoginPage && !isAuthenticated) {
                router.push('/admin/login');
            }
        }
    }, [
        pathname,
        isAuthenticated,
        loading,
        router
    ]);
    const login = (userEmail)=>{
        safeLocalStorage.setItem('adminAuth', 'true');
        safeLocalStorage.setItem('adminEmail', userEmail);
        setIsAuthenticated(true);
        setEmail(userEmail);
    };
    const logout = ()=>{
        safeLocalStorage.removeItem('adminAuth');
        safeLocalStorage.removeItem('adminEmail');
        setIsAuthenticated(false);
        setEmail(null);
        router.push('/');
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](AdminAuthContext.Provider, {
        value: {
            isAuthenticated,
            email,
            login,
            logout,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/contexts/AdminAuthContext.tsx>",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_s(AdminAuthProvider, "3Skqr48b7YcPi8+bHiIIWM3FtM4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AdminAuthProvider;
function useAdminAuth() {
    _s1();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](AdminAuthContext);
    if (context === undefined) {
        throw new Error('useAdminAuth must be used within an AdminAuthProvider');
    }
    return context;
}
_s1(useAdminAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_refresh__.register(_c, "AdminAuthProvider");

})()),
}]);

//# sourceMappingURL=src_contexts_AdminAuthContext_tsx_1ccc62._.js.map
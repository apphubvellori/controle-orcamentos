(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_17f370._.js", {

"[project]/src/lib/supabase.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "checkTabelaUsuarios": ()=>checkTabelaUsuarios,
    "createMaterial": ()=>createMaterial,
    "createObra": ()=>createObra,
    "createOrcamento": ()=>createOrcamento,
    "deleteMaterial": ()=>deleteMaterial,
    "deleteObra": ()=>deleteObra,
    "deleteObraMaterial": ()=>deleteObraMaterial,
    "deleteOrcamento": ()=>deleteOrcamento,
    "fetchMateriais": ()=>fetchMateriais,
    "fetchObraMateriaisComDetalhes": ()=>fetchObraMateriaisComDetalhes,
    "fetchObras": ()=>fetchObras,
    "fetchObrasEmAndamento": ()=>fetchObrasEmAndamento,
    "fetchOrcamentos": ()=>fetchOrcamentos,
    "fetchUsuarios": ()=>fetchUsuarios,
    "loginUsuario": ()=>loginUsuario,
    "supabase": ()=>supabase,
    "updateMaterial": ()=>updateMaterial,
    "updateObra": ()=>updateObra,
    "updateOrcamento": ()=>updateOrcamento,
    "upsertObraMaterial": ()=>upsertObraMaterial
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__ = __turbopack_import__("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) {locals}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const supabaseUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_URL || 'https://yhiiupamxdjmnrktkjku.supabase.co';
const supabaseAnonKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloaWl1cGFteGRqbW5ya3Rramt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0ODg2NzUsImV4cCI6MjA4NDA2NDY3NX0._QjYtYAlypJdursHe0-rPz14QOT4NNP2EklqcJ6TpkI';
const supabase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$locals$7d$__["createClient"](supabaseUrl, supabaseAnonKey);
async function fetchOrcamentos() {
    const { data, error } = await supabase.from('orcamentos').select('*').order('data', {
        ascending: false
    });
    if (error) {
        console.error('Erro ao buscar orçamentos:', error);
        throw error;
    }
    return data || [];
}
async function createOrcamento(orcamento) {
    const { data, error } = await supabase.from('orcamentos').insert([
        orcamento
    ]).select().single();
    if (error) {
        console.error('Erro ao criar orçamento:', error);
        throw new Error(error.message);
    }
    return data;
}
async function updateOrcamento(id, updates) {
    const { data, error } = await supabase.from('orcamentos').update(updates).eq('id', id).select().single();
    if (error) {
        console.error('Erro ao atualizar orçamento:', error);
        throw new Error(error.message);
    }
    return data;
}
async function deleteOrcamento(id) {
    const { error } = await supabase.from('orcamentos').delete().eq('id', id);
    if (error) {
        console.error('Erro ao excluir orçamento:', error);
        throw new Error(error.message);
    }
}
async function fetchMateriais() {
    const { data, error } = await supabase.from('materiais').select('*').order('nome', {
        ascending: true
    });
    if (error) {
        console.error('Erro ao buscar materiais:', error);
        throw error;
    }
    return data || [];
}
async function createMaterial(material) {
    const { data, error } = await supabase.from('materiais').insert([
        material
    ]).select().single();
    if (error) {
        console.error('Erro ao criar material:', error);
        throw new Error(error.message);
    }
    return data;
}
async function updateMaterial(id, updates) {
    const { data, error } = await supabase.from('materiais').update(updates).eq('id', id).select().single();
    if (error) {
        console.error('Erro ao atualizar material:', error);
        throw new Error(error.message);
    }
    return data;
}
async function deleteMaterial(id) {
    const { error } = await supabase.from('materiais').delete().eq('id', id);
    if (error) {
        console.error('Erro ao excluir material:', error);
        throw new Error(error.message);
    }
}
async function fetchObras() {
    const { data, error } = await supabase.from('obras').select(`
      *,
      orcamento:orcamentos(id, cliente, status)
    `).order('created_at', {
        ascending: false
    });
    if (error) {
        console.error('Erro ao buscar obras:', error);
        throw error;
    }
    return data || [];
}
async function fetchObrasEmAndamento() {
    const { data, error } = await supabase.from('obras').select(`
      *,
      orcamento:orcamentos(id, cliente)
    `).eq('status', 'em_andamento').order('created_at', {
        ascending: false
    });
    if (error) {
        console.error('Erro ao buscar obras em andamento:', error);
        throw error;
    }
    return data || [];
}
async function createObra(obra) {
    const { data, error } = await supabase.from('obras').insert([
        obra
    ]).select().single();
    if (error) {
        console.error('Erro ao criar obra:', error);
        throw new Error(error.message);
    }
    return data;
}
async function updateObra(id, updates) {
    const { data, error } = await supabase.from('obras').update(updates).eq('id', id).select().single();
    if (error) {
        console.error('Erro ao atualizar obra:', error);
        throw new Error(error.message);
    }
    return data;
}
async function deleteObra(id) {
    const { error } = await supabase.from('obras').delete().eq('id', id);
    if (error) {
        console.error('Erro ao excluir obra:', error);
        throw new Error(error.message);
    }
}
async function fetchObraMateriaisComDetalhes(obraId) {
    const { data, error } = await supabase.from('obra_materiais').select(`
      *,
      material:materiais(id, nome)
    `).eq('obra_id', obraId);
    if (error) {
        console.error('Erro ao buscar materiais da obra:', error);
        throw error;
    }
    return data || [];
}
async function upsertObraMaterial(obraMaterial) {
    // Verifica se já existe
    const { data: existing } = await supabase.from('obra_materiais').select('id').eq('obra_id', obraMaterial.obra_id).eq('material_id', obraMaterial.material_id).single();
    if (existing) {
        // Atualiza
        const { data, error } = await supabase.from('obra_materiais').update({
            quantidade: obraMaterial.quantidade
        }).eq('id', existing.id).select().single();
        if (error) throw new Error(error.message);
        return data;
    } else {
        // Insere
        const { data, error } = await supabase.from('obra_materiais').insert([
            obraMaterial
        ]).select().single();
        if (error) throw new Error(error.message);
        return data;
    }
}
async function deleteObraMaterial(id) {
    const { error } = await supabase.from('obra_materiais').delete().eq('id', id);
    if (error) {
        console.error('Erro ao excluir material da obra:', error);
        throw new Error(error.message);
    }
}
async function loginUsuario(email, senha) {
    const { data, error } = await supabase.from('usuarios').select('*').eq('email', email).eq('senha', senha).single();
    if (error) {
        console.error('Erro no login:', error);
        return null;
    }
    return data;
}
async function checkTabelaUsuarios() {
    try {
        const { error } = await supabase.from('usuarios').select('id').limit(1);
        // Se não houver erro, a tabela existe
        return !error;
    } catch  {
        return false;
    }
}
async function fetchUsuarios() {
    const { data, error } = await supabase.from('usuarios').select('*').order('nome', {
        ascending: true
    });
    if (error) {
        console.error('Erro ao buscar usuários:', error);
        throw error;
    }
    return data || [];
}

})()),
"[project]/src/contexts/AuthContext.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AuthProvider": ()=>AuthProvider,
    "useAuth": ()=>useAuth
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
'use client';
;
;
const AuthContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](undefined);
// Helper seguro para localStorage
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
function AuthProvider({ children }) {
    _s();
    const [usuario, setUsuario] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [authEnabled, setAuthEnabled] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        // Verifica se há usuário salvo no localStorage
        const savedUser = safeLocalStorage.getItem('usuario');
        if (savedUser) {
            try {
                const parsed = JSON.parse(savedUser);
                setUsuario(parsed);
                setAuthEnabled(true);
            } catch  {
                safeLocalStorage.removeItem('usuario');
            }
        }
        // Finaliza loading imediatamente - sem esperar banco
        setLoading(false);
    }, []);
    const login = async (email, senha)=>{
        try {
            const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUsuario"](email, senha);
            if (user) {
                setUsuario(user);
                setAuthEnabled(true);
                safeLocalStorage.setItem('usuario', JSON.stringify(user));
                return true;
            }
            return false;
        } catch (error) {
            console.error('Erro no login:', error);
            return false;
        }
    };
    const logout = ()=>{
        setUsuario(null);
        setAuthEnabled(false);
        safeLocalStorage.removeItem('usuario');
    };
    const isAdmin = !authEnabled || usuario?.tipo === 'admin';
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](AuthContext.Provider, {
        value: {
            usuario,
            loading,
            login,
            logout,
            isAdmin,
            authEnabled
        },
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/contexts/AuthContext.tsx>",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "Cz/9kUlfNPrnwroDibvGcgUKCMA=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_refresh__.register(_c, "AuthProvider");

})()),
}]);

//# sourceMappingURL=src_17f370._.js.map
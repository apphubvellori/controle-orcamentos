(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_bcca41._.js", {

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
"[project]/src/lib/utils.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "calcConversionRate": ()=>calcConversionRate,
    "cn": ()=>cn,
    "formatCurrency": ()=>formatCurrency,
    "formatDate": ()=>formatDate,
    "formatNumberBR": ()=>formatNumberBR,
    "formatPercent": ()=>formatPercent,
    "maskCurrency": ()=>maskCurrency,
    "parseNumberBR": ()=>parseNumberBR
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function cn(...inputs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"](inputs));
}
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}
function formatDate(date) {
    if (!date) return '-';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '-';
    return d.toLocaleDateString('pt-BR');
}
function formatPercent(value) {
    return `${value.toFixed(1)}%`;
}
function calcConversionRate(fechados, total) {
    if (!total || total === 0) return 0;
    return fechados / total * 100;
}
function formatNumberBR(value) {
    const num = typeof value === 'string' ? parseFloat(value) || 0 : value;
    return num.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
function parseNumberBR(value) {
    if (!value) return 0;
    // Remove pontos (separador de milhar) e troca vírgula por ponto
    const cleaned = value.replace(/\./g, '').replace(',', '.');
    return parseFloat(cleaned) || 0;
}
function maskCurrency(value) {
    // Remove tudo exceto números
    let numbers = value.replace(/\D/g, '');
    // Se vazio, retorna vazio
    if (!numbers) return '';
    // Converte para número e divide por 100 para ter 2 casas decimais
    const num = parseInt(numbers) / 100;
    // Formata para pt-BR
    return num.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

})()),
"[project]/src/components/ui/Common.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Badge": ()=>Badge,
    "EmptyState": ()=>EmptyState,
    "LoadingSpinner": ()=>LoadingSpinner
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Sparkles$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) {export default as Sparkles}");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
function EmptyState({ icon, title, description, action }) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "flex flex-col items-center justify-center py-16 px-4 text-center",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "w-20 h-20 rounded-2xl bg-dark-800 flex items-center justify-center mb-6",
                children: icon || /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Sparkles$7d$__["Sparkles"], {
                    className: "w-10 h-10 text-dark-500"
                }, void 0, false, {
                    fileName: "<[project]/src/components/ui/Common.tsx>",
                    lineNumber: 17,
                    columnNumber: 18
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/Common.tsx>",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                className: "text-lg font-semibold text-white mb-2",
                children: title
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/Common.tsx>",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                className: "text-dark-400 max-w-sm mb-6",
                children: description
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/Common.tsx>",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            action
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/Common.tsx>",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = EmptyState;
function LoadingSpinner({ size = 'md' }) {
    const sizes = {
        sm: 'w-6 h-6 border-2',
        md: 'w-10 h-10 border-3',
        lg: 'w-16 h-16 border-4'
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "flex items-center justify-center py-12",
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("rounded-full border-dark-700 border-t-primary-500 animate-spin", sizes[size])
        }, void 0, false, {
            fileName: "<[project]/src/components/ui/Common.tsx>",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/Common.tsx>",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c1 = LoadingSpinner;
function Badge({ children, variant = 'success' }) {
    const variants = {
        success: 'badge-success',
        danger: 'badge-danger',
        warning: 'badge-warning',
        info: 'badge-info',
        primary: 'badge-info',
        secondary: 'bg-dark-600 text-dark-300'
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]('badge', variants[variant]),
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/ui/Common.tsx>",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c2 = Badge;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "EmptyState");
__turbopack_refresh__.register(_c1, "LoadingSpinner");
__turbopack_refresh__.register(_c2, "Badge");

})()),
"[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Modal": ()=>Modal
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) {export default as X}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
function Modal({ isOpen, onClose, title, children, size = 'md' }) {
    _s();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return ()=>{
            document.body.style.overflow = 'unset';
        };
    }, [
        isOpen
    ]);
    if (!isOpen) return null;
    const sizes = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl'
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in",
                onClick: onClose
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/Modal.tsx>",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]("relative w-full bg-dark-900 border border-dark-700 rounded-2xl shadow-2xl animate-slide-up", sizes[size]),
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex items-center justify-between px-6 py-4 border-b border-dark-700",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                className: "text-xl font-semibold text-white",
                                children: title
                            }, void 0, false, {
                                fileName: "<[project]/src/components/ui/Modal.tsx>",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                onClick: onClose,
                                className: "p-2 rounded-xl text-dark-400 hover:text-white hover:bg-dark-800 transition-colors",
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__X$7d$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/ui/Modal.tsx>",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/ui/Modal.tsx>",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/ui/Modal.tsx>",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "px-6 py-6 max-h-[70vh] overflow-y-auto scrollbar-thin",
                        children: children
                    }, void 0, false, {
                        fileName: "<[project]/src/components/ui/Modal.tsx>",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/ui/Modal.tsx>",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/Modal.tsx>",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
var _c;
__turbopack_refresh__.register(_c, "Modal");

})()),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Button": ()=>Button
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Loader2$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/loader-2.js [app-client] (ecmascript) {export default as Loader2}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
function Button({ children, className, variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, disabled, ...props }) {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        danger: 'btn-danger',
        success: 'btn-success',
        ghost: 'btn-ghost'
    };
    const sizes = {
        sm: 'px-3 py-1.5 text-xs',
        md: 'px-4 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base'
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"]('btn', variants[variant], sizes[size], className),
        disabled: disabled || isLoading,
        ...props,
        children: [
            isLoading ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Loader2$7d$__["Loader2"], {
                className: "w-4 h-4 animate-spin"
            }, void 0, false, {
                fileName: "<[project]/src/components/ui/Button.tsx>",
                lineNumber: 51,
                columnNumber: 9
            }, this) : leftIcon,
            children,
            !isLoading && rightIcon
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/ui/Button.tsx>",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_refresh__.register(_c, "Button");

})()),
"[project]/src/app/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ObrasPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__HardHat$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/hard-hat.js [app-client] (ecmascript) {export default as HardHat}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Package$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) {export default as Package}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Search$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) {export default as Search}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronDown$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) {export default as ChevronDown}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronUp$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) {export default as ChevronUp}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Play$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) {export default as Play}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Pause$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) {export default as Pause}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Plus$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) {export default as Plus}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Minus$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) {export default as Minus}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Save$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) {export default as Save}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Printer$7d$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) {export default as Printer}");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Common$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/ui/Common.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
// Status disponíveis para funcionário (sem concluída)
const statusOptions = [
    {
        value: 'em_andamento',
        label: 'Em Andamento'
    },
    {
        value: 'pausada',
        label: 'Pausada'
    }
];
const statusConfig = {
    em_andamento: {
        variant: 'success',
        icon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Play$7d$__["Play"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "<[project]/src/app/page.tsx>",
            lineNumber: 21,
            columnNumber: 45
        }, this)
    },
    pausada: {
        variant: 'warning',
        icon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Pause$7d$__["Pause"], {
            className: "w-3 h-3"
        }, void 0, false, {
            fileName: "<[project]/src/app/page.tsx>",
            lineNumber: 22,
            columnNumber: 40
        }, this)
    }
};
function ObrasPage() {
    _s();
    const [obras, setObras] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [materiais, setMateriais] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](true);
    const [searchTerm, setSearchTerm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('');
    const [filterStatus, setFilterStatus] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('');
    const [expandedObra, setExpandedObra] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    // Modal de materiais
    const [isModalOpen, setIsModalOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [selectedObra, setSelectedObra] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](null);
    const [loadingModal, setLoadingModal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [saving, setSaving] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const [quantidades, setQuantidades] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({});
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        loadData();
    }, []);
    const loadData = async ()=>{
        try {
            setLoading(true);
            const [obrasData, materiaisData] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchObras"](),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchMateriais"]()
            ]);
            setObras(obrasData);
            setMateriais(materiaisData);
        } catch (err) {
            console.error('Erro ao carregar dados:', err);
        } finally{
            setLoading(false);
        }
    };
    // Filtra obras (não mostra concluídas para funcionários)
    const filteredObras = obras.filter((o)=>{
        // Obras concluídas não aparecem para funcionários
        if (o.status === 'concluida') return false;
        const matchSearch = o.nome.toLowerCase().includes(searchTerm.toLowerCase()) || o.descricao?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchStatus = !filterStatus || o.status === filterStatus;
        return matchSearch && matchStatus;
    });
    // Carrega materiais ao expandir
    const handleExpandObra = async (obraId)=>{
        if (expandedObra === obraId) {
            setExpandedObra(null);
            return;
        }
        setExpandedObra(obraId);
        // Verifica se já carregou
        const obra = obras.find((o)=>o.id === obraId);
        if (obra?.materiaisCarregados) return;
        // Marca como carregando
        setObras((prev)=>prev.map((o)=>o.id === obraId ? {
                    ...o,
                    loadingMateriais: true
                } : o));
        try {
            const materiaisObra = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchObraMateriaisComDetalhes"](obraId);
            setObras((prev)=>prev.map((o)=>o.id === obraId ? {
                        ...o,
                        materiaisCarregados: materiaisObra,
                        loadingMateriais: false
                    } : o));
        } catch (err) {
            console.error('Erro ao carregar materiais:', err);
            setObras((prev)=>prev.map((o)=>o.id === obraId ? {
                        ...o,
                        loadingMateriais: false
                    } : o));
        }
    };
    // Abre modal para editar materiais
    const openMateriaisModal = async (obra)=>{
        setSelectedObra(obra);
        setIsModalOpen(true);
        setLoadingModal(true);
        try {
            const materiaisObra = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchObraMateriaisComDetalhes"](obra.id);
            // Inicializa quantidades
            const qtds = {};
            materiaisObra.forEach((m)=>{
                qtds[m.material_id] = m.quantidade;
            });
            // Adiciona materiais que ainda não estão na obra
            materiais.forEach((m)=>{
                if (!(m.id in qtds)) {
                    qtds[m.id] = 0;
                }
            });
            setQuantidades(qtds);
        } catch (err) {
            console.error('Erro ao carregar materiais da obra:', err);
        } finally{
            setLoadingModal(false);
        }
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
        setSelectedObra(null);
        setQuantidades({});
    };
    const handleQuantidadeChange = (materialId, delta)=>{
        setQuantidades((prev)=>({
                ...prev,
                [materialId]: Math.max(0, (prev[materialId] || 0) + delta)
            }));
    };
    const handleQuantidadeInput = (materialId, value)=>{
        const num = parseInt(value) || 0;
        setQuantidades((prev)=>({
                ...prev,
                [materialId]: Math.max(0, num)
            }));
    };
    const handleSave = async ()=>{
        if (!selectedObra) return;
        setSaving(true);
        try {
            // Salva todas as quantidades
            const promises = Object.entries(quantidades).map(([materialId, quantidade])=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertObraMaterial"]({
                    obra_id: selectedObra.id,
                    material_id: Number(materialId),
                    quantidade
                }));
            await Promise.all(promises);
            // Recarrega materiais da obra expandida
            const materiaisObra = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchObraMateriaisComDetalhes"](selectedObra.id);
            setObras((prev)=>prev.map((o)=>o.id === selectedObra.id ? {
                        ...o,
                        materiaisCarregados: materiaisObra
                    } : o));
            closeModal();
        } catch (err) {
            console.error('Erro ao salvar:', err);
            alert('Erro ao salvar quantidades');
        } finally{
            setSaving(false);
        }
    };
    // Função para imprimir relatório de materiais
    const handlePrintRelatorio = async (obra)=>{
        // Carrega materiais se ainda não foram carregados
        let materiaisParaImprimir = obra.materiaisCarregados;
        if (!materiaisParaImprimir) {
            try {
                materiaisParaImprimir = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchObraMateriaisComDetalhes"](obra.id);
                setObras((prev)=>prev.map((o)=>o.id === obra.id ? {
                            ...o,
                            materiaisCarregados: materiaisParaImprimir,
                            loadingMateriais: false
                        } : o));
            } catch (err) {
                console.error('Erro ao carregar materiais para impressão:', err);
                alert('Erro ao carregar materiais para impressão');
                return;
            }
        }
        const materiaisUtilizados = materiaisParaImprimir?.filter((m)=>m.quantidade > 0) || [];
        const dataAtual = new Date().toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        const statusLabel = [
            ...statusOptions,
            {
                value: 'concluida',
                label: 'Concluída'
            }
        ].find((s)=>s.value === obra.status)?.label || obra.status;
        // Cria o HTML para impressão
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
            alert('Popup bloqueado. Permita popups para imprimir.');
            return;
        }
        printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Relatório de Materiais - ${obra.nome}</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding: 20px;
            color: #333;
            line-height: 1.5;
          }
          .header {
            text-align: center;
            border-bottom: 2px solid #333;
            padding-bottom: 15px;
            margin-bottom: 20px;
          }
          .header h1 {
            font-size: 24px;
            margin-bottom: 5px;
            color: #1a1a1a;
          }
          .header p {
            color: #666;
            font-size: 12px;
          }
          .info-section {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
          }
          .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .info-item {
            margin-bottom: 8px;
          }
          .info-label {
            font-weight: 600;
            color: #555;
            font-size: 12px;
            text-transform: uppercase;
          }
          .info-value {
            color: #1a1a1a;
            font-size: 14px;
          }
          .status-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
          }
          .status-em_andamento { background: #dcfce7; color: #166534; }
          .status-pausada { background: #fef3c7; color: #92400e; }
          .status-concluida { background: #dbeafe; color: #1e40af; }
          
          .materials-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 15px;
            padding-bottom: 8px;
            border-bottom: 1px solid #ddd;
          }
          .materials-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          .materials-table th,
          .materials-table td {
            padding: 10px 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          .materials-table th {
            background: #f0f0f0;
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            color: #555;
          }
          .materials-table tr:hover {
            background: #f9f9f9;
          }
          .materials-table .qty {
            text-align: center;
            font-weight: 600;
            color: #1a1a1a;
          }
          .materials-table .idx {
            text-align: center;
            color: #888;
            width: 40px;
          }
          .empty-message {
            text-align: center;
            padding: 30px;
            color: #888;
            font-style: italic;
          }
          .footer {
            margin-top: 30px;
            padding-top: 15px;
            border-top: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            color: #888;
          }
          .signature-area {
            margin-top: 50px;
            display: flex;
            justify-content: space-between;
          }
          .signature-box {
            text-align: center;
            width: 200px;
          }
          .signature-line {
            border-top: 1px solid #333;
            margin-top: 50px;
            padding-top: 5px;
            font-size: 12px;
          }
          .total-items {
            text-align: right;
            font-size: 14px;
            margin-top: 10px;
            font-weight: 600;
          }
          @media print {
            body { padding: 10px; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>📋 Relatório de Materiais</h1>
          <p>Checklist de materiais utilizados na obra</p>
        </div>
        
        <div class="info-section">
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Nome da Obra</div>
              <div class="info-value">${obra.nome}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Status</div>
              <div class="info-value">
                <span class="status-badge status-${obra.status}">${statusLabel}</span>
              </div>
            </div>
            <div class="info-item">
              <div class="info-label">Data do Relatório</div>
              <div class="info-value">${dataAtual}</div>
            </div>
            ${obra.descricao ? `
            <div class="info-item">
              <div class="info-label">Descrição</div>
              <div class="info-value">${obra.descricao}</div>
            </div>
            ` : ''}
          </div>
        </div>
        
        <div class="materials-title">📦 Materiais Utilizados</div>
        
        ${materiaisUtilizados.length > 0 ? `
          <table class="materials-table">
            <thead>
              <tr>
                <th class="idx">#</th>
                <th>Material</th>
                <th class="qty">Quantidade</th>
                <th>Conferido</th>
              </tr>
            </thead>
            <tbody>
              ${materiaisUtilizados.map((m, index)=>`
                <tr>
                  <td class="idx">${index + 1}</td>
                  <td>${m.material?.nome || `Material #${m.material_id}`}</td>
                  <td class="qty">${m.quantidade} un</td>
                  <td style="width: 80px;">☐</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="total-items">
            Total: ${materiaisUtilizados.length} ${materiaisUtilizados.length === 1 ? 'item' : 'itens'} | 
            ${materiaisUtilizados.reduce((acc, m)=>acc + m.quantidade, 0)} unidades
          </div>
        ` : `
          <div class="empty-message">
            Nenhum material registrado para esta obra
          </div>
        `}
        
        <div class="signature-area">
          <div class="signature-box">
            <div class="signature-line">Responsável pela Obra</div>
          </div>
          <div class="signature-box">
            <div class="signature-line">Conferente</div>
          </div>
        </div>
        
        <div class="footer">
          <span>Obra #${obra.id}</span>
          <span>Gerado em: ${dataAtual}</span>
        </div>
        
        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
      </html>
    `);
        printWindow.document.close();
    };
    if (loading) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "flex items-center justify-center h-[60vh]",
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Common$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                size: "lg"
            }, void 0, false, {
                fileName: "<[project]/src/app/page.tsx>",
                lineNumber: 470,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/app/page.tsx>",
            lineNumber: 469,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                        className: "text-2xl lg:text-3xl font-bold font-heading text-white",
                        children: "Obras"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/page.tsx>",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "text-dark-400 mt-1",
                        children: "Visualize as obras e os materiais utilizados"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/page.tsx>",
                        lineNumber: 482,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/page.tsx>",
                lineNumber: 478,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "glass-card p-4",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex flex-col md:flex-row gap-4",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "relative flex-1",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Search$7d$__["Search"], {
                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/page.tsx>",
                                    lineNumber: 491,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                    type: "text",
                                    placeholder: "Buscar obra...",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    className: "input pl-12 w-full"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/page.tsx>",
                                    lineNumber: 492,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/page.tsx>",
                            lineNumber: 490,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("select", {
                            value: filterStatus,
                            onChange: (e)=>setFilterStatus(e.target.value),
                            className: "input w-full md:w-48",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                    value: "",
                                    children: "Todos os Status"
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/page.tsx>",
                                    lineNumber: 505,
                                    columnNumber: 13
                                }, this),
                                statusOptions.map((opt)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("option", {
                                        value: opt.value,
                                        children: opt.label
                                    }, opt.value, false, {
                                        fileName: "<[project]/src/app/page.tsx>",
                                        lineNumber: 507,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/app/page.tsx>",
                            lineNumber: 500,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/page.tsx>",
                    lineNumber: 489,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/page.tsx>",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            filteredObras.length > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "space-y-4",
                children: filteredObras.map((obra)=>{
                    const statusInfo = statusConfig[obra.status] || statusConfig.em_andamento;
                    const isExpanded = expandedObra === obra.id;
                    const materiaisUtilizados = obra.materiaisCarregados?.filter((m)=>m.quantidade > 0) || [];
                    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "glass-card overflow-hidden",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "p-4 flex items-center justify-between cursor-pointer hover:bg-dark-700/30 transition-colors",
                                onClick: ()=>handleExpandObra(obra.id),
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__HardHat$7d$__["HardHat"], {
                                                    className: "w-6 h-6 text-accent-400"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/page.tsx>",
                                                    lineNumber: 530,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/page.tsx>",
                                                lineNumber: 529,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                                        className: "font-semibold text-white",
                                                        children: obra.nome
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/page.tsx>",
                                                        lineNumber: 533,
                                                        columnNumber: 23
                                                    }, this),
                                                    obra.descricao && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                        className: "text-sm text-dark-400 mt-0.5",
                                                        children: obra.descricao
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/page.tsx>",
                                                        lineNumber: 535,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/page.tsx>",
                                                lineNumber: 532,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/page.tsx>",
                                        lineNumber: 528,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Common$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: statusInfo.variant,
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        statusInfo.icon,
                                                        statusOptions.find((s)=>s.value === obra.status)?.label || obra.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/app/page.tsx>",
                                                    lineNumber: 541,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/page.tsx>",
                                                lineNumber: 540,
                                                columnNumber: 21
                                            }, this),
                                            isExpanded ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronUp$7d$__["ChevronUp"], {
                                                className: "w-5 h-5 text-dark-400"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/page.tsx>",
                                                lineNumber: 547,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__ChevronDown$7d$__["ChevronDown"], {
                                                className: "w-5 h-5 text-dark-400"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/page.tsx>",
                                                lineNumber: 549,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/page.tsx>",
                                        lineNumber: 539,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/page.tsx>",
                                lineNumber: 524,
                                columnNumber: 17
                            }, this),
                            isExpanded && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "px-4 pb-4 pt-2 border-t border-dark-700",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h4", {
                                                        className: "text-sm font-semibold text-dark-300 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Package$7d$__["Package"], {
                                                                className: "w-4 h-4 text-primary-400"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/page.tsx>",
                                                                lineNumber: 561,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Materiais Utilizados"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/page.tsx>",
                                                        lineNumber: 560,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            handlePrintRelatorio(obra);
                                                        },
                                                        className: "flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-colors",
                                                        title: "Imprimir relatório de materiais",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Printer$7d$__["Printer"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/app/page.tsx>",
                                                                lineNumber: 572,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Imprimir"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/app/page.tsx>",
                                                        lineNumber: 564,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/page.tsx>",
                                                lineNumber: 559,
                                                columnNumber: 23
                                            }, this),
                                            obra.loadingMateriais ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center justify-center py-6",
                                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Common$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                                                    size: "sm"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/app/page.tsx>",
                                                    lineNumber: 579,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/page.tsx>",
                                                lineNumber: 578,
                                                columnNumber: 25
                                            }, this) : materiaisUtilizados.length > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2",
                                                children: materiaisUtilizados.map((m)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "flex items-center justify-between p-3 rounded-lg bg-dark-700/50 border border-dark-600",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                                        className: "w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center",
                                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Package$7d$__["Package"], {
                                                                            className: "w-4 h-4 text-primary-400"
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/app/page.tsx>",
                                                                            lineNumber: 590,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/page.tsx>",
                                                                        lineNumber: 589,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                        className: "text-sm text-white",
                                                                        children: m.material?.nome || `Material #${m.material_id}`
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/app/page.tsx>",
                                                                        lineNumber: 592,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/page.tsx>",
                                                                lineNumber: 588,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                className: "text-sm font-semibold text-primary-400 bg-primary-500/10 px-2 py-1 rounded",
                                                                children: [
                                                                    m.quantidade,
                                                                    "x"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/app/page.tsx>",
                                                                lineNumber: 594,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, m.id, true, {
                                                        fileName: "<[project]/src/app/page.tsx>",
                                                        lineNumber: 584,
                                                        columnNumber: 29
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/page.tsx>",
                                                lineNumber: 582,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                className: "text-sm text-dark-500 py-4 text-center bg-dark-800/30 rounded-lg",
                                                children: "Nenhum material registrado nesta obra"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/app/page.tsx>",
                                                lineNumber: 601,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/app/page.tsx>",
                                        lineNumber: 558,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            openMateriaisModal(obra);
                                        },
                                        leftIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Package$7d$__["Package"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/page.tsx>",
                                            lineNumber: 613,
                                            columnNumber: 33
                                        }, void 0),
                                        className: "w-full sm:w-auto",
                                        children: "Registrar Materiais"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/page.tsx>",
                                        lineNumber: 608,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/page.tsx>",
                                lineNumber: 556,
                                columnNumber: 19
                            }, this)
                        ]
                    }, obra.id, true, {
                        fileName: "<[project]/src/app/page.tsx>",
                        lineNumber: 522,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "<[project]/src/app/page.tsx>",
                lineNumber: 515,
                columnNumber: 9
            }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "glass-card",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Common$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                    icon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__HardHat$7d$__["HardHat"], {
                        className: "w-10 h-10 text-dark-500"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/page.tsx>",
                        lineNumber: 627,
                        columnNumber: 19
                    }, void 0),
                    title: "Nenhuma obra encontrada",
                    description: searchTerm || filterStatus ? "Tente ajustar os filtros" : "Não há obras cadastradas"
                }, void 0, false, {
                    fileName: "<[project]/src/app/page.tsx>",
                    lineNumber: 626,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/page.tsx>",
                lineNumber: 625,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "text-sm text-dark-400 text-center",
                children: [
                    "Total: ",
                    filteredObras.length,
                    " ",
                    filteredObras.length === 1 ? 'obra' : 'obras'
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/page.tsx>",
                lineNumber: 635,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isModalOpen,
                onClose: closeModal,
                title: `Materiais - ${selectedObra?.nome || ''}`,
                size: "lg",
                children: loadingModal ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "flex items-center justify-center py-12",
                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Common$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                        size: "lg"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/page.tsx>",
                        lineNumber: 648,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/page.tsx>",
                    lineNumber: 647,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "space-y-4",
                    children: materiais.length > 0 ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "max-h-96 overflow-y-auto space-y-3 pr-2",
                                children: materiais.map((material)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex items-center justify-between p-3 rounded-lg bg-dark-700/50 border border-dark-600",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                        className: "w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Package$7d$__["Package"], {
                                                            className: "w-5 h-5 text-primary-400"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/page.tsx>",
                                                            lineNumber: 662,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/page.tsx>",
                                                        lineNumber: 661,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "font-medium text-white",
                                                        children: material.nome
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/page.tsx>",
                                                        lineNumber: 664,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/page.tsx>",
                                                lineNumber: 660,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        type: "button",
                                                        onClick: ()=>handleQuantidadeChange(material.id, -1),
                                                        className: "w-8 h-8 rounded-lg bg-dark-600 hover:bg-dark-500 flex items-center justify-center text-white transition-colors",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Minus$7d$__["Minus"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/page.tsx>",
                                                            lineNumber: 673,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/page.tsx>",
                                                        lineNumber: 668,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                        type: "number",
                                                        min: "0",
                                                        value: quantidades[material.id] || 0,
                                                        onChange: (e)=>handleQuantidadeInput(material.id, e.target.value),
                                                        className: "w-16 h-8 text-center rounded-lg bg-dark-600 border border-dark-500 text-white text-sm focus:outline-none focus:border-primary-500"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/page.tsx>",
                                                        lineNumber: 676,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                        type: "button",
                                                        onClick: ()=>handleQuantidadeChange(material.id, 1),
                                                        className: "w-8 h-8 rounded-lg bg-dark-600 hover:bg-dark-500 flex items-center justify-center text-white transition-colors",
                                                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Plus$7d$__["Plus"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/app/page.tsx>",
                                                            lineNumber: 689,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/app/page.tsx>",
                                                        lineNumber: 684,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/app/page.tsx>",
                                                lineNumber: 667,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, material.id, true, {
                                        fileName: "<[project]/src/app/page.tsx>",
                                        lineNumber: 656,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "<[project]/src/app/page.tsx>",
                                lineNumber: 654,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex justify-end gap-3 pt-4 border-t border-dark-700",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        variant: "secondary",
                                        onClick: closeModal,
                                        children: "Cancelar"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/page.tsx>",
                                        lineNumber: 697,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleSave,
                                        isLoading: saving,
                                        leftIcon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Save$7d$__["Save"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/app/page.tsx>",
                                            lineNumber: 703,
                                            columnNumber: 31
                                        }, void 0),
                                        children: "Salvar Quantidades"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/page.tsx>",
                                        lineNumber: 700,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/page.tsx>",
                                lineNumber: 696,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Common$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                        icon: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$export__default__as__Package$7d$__["Package"], {
                            className: "w-10 h-10 text-dark-500"
                        }, void 0, false, {
                            fileName: "<[project]/src/app/page.tsx>",
                            lineNumber: 711,
                            columnNumber: 23
                        }, void 0),
                        title: "Nenhum material cadastrado",
                        description: "Acesse a área administrativa para cadastrar materiais"
                    }, void 0, false, {
                        fileName: "<[project]/src/app/page.tsx>",
                        lineNumber: 710,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/app/page.tsx>",
                    lineNumber: 651,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/page.tsx>",
                lineNumber: 640,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/page.tsx>",
        lineNumber: 476,
        columnNumber: 5
    }, this);
}
_s(ObrasPage, "+qhRUbLpnULrOiImCd33Exg8NhY=");
_c = ObrasPage;
var _c;
__turbopack_refresh__.register(_c, "ObrasPage");

})()),
}]);

//# sourceMappingURL=src_bcca41._.js.map
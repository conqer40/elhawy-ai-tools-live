const fs = require('fs');
const filepath = 'd:/TEST/elhawy-ai-tools/src/data/tools.ts';
let content = fs.readFileSync(filepath, 'utf8');

const baseTools = [
    { name: 'CopyAI', category: 'كتابة المقالات', pricing: 'تجربة مجانية' },
    { name: 'Midjourney', category: 'إنشاء الصور', pricing: 'مدفوع' },
    { name: 'Synthesia', category: 'تحويل النص الى فيديو', pricing: 'اشتراك' },
    { name: 'Mubert', category: 'إنشاء الموسيقى', pricing: 'مجاني + مدفوع' },
    { name: 'Leonardo AI', category: 'إنشاء الصور', pricing: 'مجاني' },
    { name: 'Runway ML', category: 'إنشاء الفيديو', pricing: 'تجربة مجانية' },
    { name: 'Descript', category: 'الصوتيات', pricing: 'مجاني + مدفوع' },
    { name: 'Notion AI', category: 'مساعد الدراسة', pricing: 'مدفوع' },
    { name: 'GitHub Copilot', category: 'التطوير والبرمجة', pricing: 'اشتراك' },
    { name: 'Jasper', category: 'الإعلانات', pricing: 'تجربة مجانية' },
];

let generatedTools = ',\n';

for (let i = 35; i <= 150; i++) {
    const template = baseTools[i % baseTools.length];
    const isLast = i === 150;
    generatedTools += `  { id: "${i}", name: "${template.name} Pro v${Math.floor(i / 10)}", url: "/tool/${i}", websiteUrl: "https://example.com/tool${i}", category: "${template.category}", pricing: "${template.pricing}", imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80", shortDescription: "تحديث جديد وقدرات هائلة من ${template.name} في مجال ${template.category}. يقدم مزايا متقدمة وسرعة فائقة.", detailedDescription: sharedDesc, features: sharedFeatures }${isLast ? '' : ','}\n`;
}

// target substitution that is cross-platform safe
let newContent = content.replace(/\]\s*;\s*$/, generatedTools + '];\n');
fs.writeFileSync(filepath, newContent);
console.log('Appended ~115 new tools successfully!');

// Ganti kode AI dengan versi dummy
const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Ganti fungsi sendAIMessage dengan versi dummy
const newAICode = `
        async function sendAIMessage() {
            const input = document.getElementById('aiInput');
            const message = input.value.trim();
            
            if (!message) return;
            
            // Add user message
            addAIMessage(message, 'user');
            input.value = '';
            
            // Add typing indicator
            const typingDiv = document.createElement('div');
            typingDiv.className = 'ai-typing';
            typingDiv.innerHTML = '<span></span><span></span><span></span>';
            document.getElementById('aiMessages').appendChild(typingDiv);
            
            // Scroll to bottom
            scrollAIMessages();
            
            // Simulate AI thinking
            setTimeout(() => {
                // Remove typing indicator
                if (typingDiv.parentNode) {
                    typingDiv.parentNode.removeChild(typingDiv);
                }
                
                // Dummy responses based on keywords
                let aiResponse = "";
                const msg = message.toLowerCase();
                
                if (msg.includes('harga') || msg.includes('biaya') || msg.includes('berapa')) {
                    aiResponse = "Untuk info harga terupdate, silakan hubungi Admin di WhatsApp 0819 9859 3873";
                } else if (msg.includes('rekening') || msg.includes('bank') || msg.includes('e-wallet')) {
                    aiResponse = "MFH Store menyediakan berbagai jenis rekening digital: Indonesia, Malaysia, Singapura, Philips, China, dan daerah. E-Wallet Indonesia & Malaysia juga tersedia. Klik tombol 'Order Now' pada produk yang Anda minati.";
                } else if (msg.includes('cara') || msg.includes('order') || msg.includes('beli')) {
                    aiResponse = "Cara order: 1. Klik tombol 'Order Now' pada produk 2. Lengkapi form pembayaran 3. Konfirmasi ke Admin WhatsApp 0819 9859 3873";
                } else if (msg.includes('garansi') || msg.includes('jamin') || msg.includes('aman')) {
                    aiResponse = "MFH Store memberikan FULL GARANSI pada semua produk. Proses 20-30 menit, terima jadi, kualitas VVIP.";
                } else if (msg.includes('kontak') || msg.includes('admin') || msg.includes('whatsapp')) {
                    aiResponse = "Admin MFH Store: WhatsApp 0819 9859 3873";
                } else {
                    aiResponse = "Untuk informasi lengkap tentang produk MFH Store, silakan hubungi Admin WhatsApp 0819 9859 3873 atau klik tombol 'Order Now' pada produk yang diminati.";
                }
                
                // Add AI response
                addAIMessage(aiResponse, 'bot');
                
                scrollAIMessages();
            }, 1500);
        }
`;

// Temukan dan ganti fungsi sendAIMessage
const start = html.indexOf('async function sendAIMessage() {');
const end = html.indexOf('function addAIMessage(text, sender) {');
const oldCode = html.substring(start, end);

html = html.replace(oldCode, newAICode);

// Hapus API key dan system prompt
html = html.replace(/const OPENAI_API_KEY = "[^"]*";/, '// API Key removed for security');
html = html.replace(/const SYSTEM_PROMPT = `[\s\S]*?`;/, '// System prompt removed');

fs.writeFileSync('index.html', html);
console.log('AI fixed!');

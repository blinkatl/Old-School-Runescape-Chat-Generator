const { chromium } = require('playwright');  // Or use 'firefox' or 'webkit' as needed

// Endpoint for discord bot. Discord inputs change chatbox's div and returns div as screenshot
const generate = async (req, res) => {
    const { chathead, dialogue, name, removePrompt } = req.body;

    try {
        const browser = await chromium.launch({ headless: true }); // DEBUG: Add { headless:false }
        const page = await browser.newPage();

        // DEBUG: Capture console messages from the browser context for debugging
        // page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

        await page.goto('https://old-school-runescape-chat-generator.vercel.app/')
        await page.waitForLoadState('networkidle');

        await page.evaluate(({ dialogue, chathead, name, removePrompt }) => {
            const chatheadImage = document.querySelector('.chathead-image');
            if (chatheadImage) {
                chatheadImage.src = `https://osrs-chat-generator.adaptable.app/chathead/${encodeURIComponent(chathead)}.png`;
            }
        
            const dialogueDiv = document.querySelector('#dialogue');
            if (dialogueDiv) {
                dialogueDiv.textContent = dialogue;
            }

            const nameDiv = document.querySelector('#name');
            if (nameDiv) {
                nameDiv.textContent = name ? name : chathead;
            }

            const continueDiv = document.querySelector('#continue');
            if (continueDiv && removePrompt) {
                continueDiv.textContent = '';
            }
        }, { dialogue, chathead, name, removePrompt });

        //await page.pause() // DEBUG
        const buffer = await page.locator('.chatbox-container').screenshot({ type: 'png' });
        await browser.close();

        res.setHeader('Content-Type', 'image/png');
        res.send(buffer);

        // If I want to save or process the image
        // const url = `/path/to/save/generated.png`;
        // require('fs').writeFileSync(url, buffer);
        // res.json({ url: url });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'An error occurred while creating the post.', details: error.message });
    }
};

module.exports = {
    generate
};

const { chromium } = require('playwright');  // or use 'firefox' or 'webkit' as needed

const generate = async (req, res) => {
    const { chathead, dialogue, name } = req.body;

    try {
        const browser = await chromium.launch({ headless: false }); // headless:false for debug
        const page = await browser.newPage();

        // Capture console messages from the browser context for debugging
        page.on('console', msg => console.log('BROWSER LOG:', msg.text()));

        await page.goto('http://localhost:5173')
        await page.waitForLoadState('networkidle');

        await page.evaluate(({ dialogue, chathead, name }) => {
            // Change chathead image src
            const chatheadImage = document.querySelector('.chathead-image');
            if (chatheadImage) {
                chatheadImage.src = `http://localhost:3000/chathead/${encodeURIComponent(chathead)}.png`;
            }
        
            // Change dialogue text
            const dialogueDiv = document.querySelector('#dialogue');
            if (dialogueDiv) {
                dialogueDiv.textContent = dialogue;
            }

            // Change name text
            const nameDiv = document.querySelector('#name');
            if (nameDiv) {
                if (!name) {
                    name = chathead;
                }
                nameDiv.textContent = name;
            }
        }, { dialogue, chathead, name });

        //await page.pause()//DEBUG CODE
        const memeBuffer = await page.locator('.chatbox-container').screenshot({ type: 'png' });
        await browser.close();

        res.setHeader('Content-Type', 'image/png');
        res.send(memeBuffer);

        // If I want to save or process the image
        // const memeUrl = `/path/to/save/generated-meme.png`;
        // require('fs').writeFileSync(memeUrl, memeBuffer);
        // res.json({ url: memeUrl });
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ error: 'An error occurred while creating the post.' });
    }
};

module.exports = {
    generate
};

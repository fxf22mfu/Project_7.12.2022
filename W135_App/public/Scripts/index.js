//Animated Header
const StartAnimation = document.createElement('section');
StartAnimation.classList.add('StartAnimation');
body.insertBefore(StartAnimation, SecondNav);

    const ComeFirst = document.createElement('div');
    ComeFirst.setAttribute("class", "ComeFirst");
    StartAnimation.appendChild(ComeFirst);

        //'Climate Montioring People' display
        const H1Nr1 = document.createElement('h1');
        H1Nr1.setAttribute("class", "H1Nr1");
        const node1 = document.createTextNode('Climate')
        H1Nr1.appendChild(node1);
        ComeFirst.appendChild(H1Nr1);

        const H1Nr2 = document.createElement('h1');
        H1Nr2.setAttribute("class", "H1Nr2");
        const node2 = document.createTextNode('Monitoring')
        H1Nr2.appendChild(node2);
        ComeFirst.appendChild(H1Nr2);

        const H1Nr3 = document.createElement('h1');
        const node3 = document.createTextNode('People')
        H1Nr3.appendChild(node3);
        ComeFirst.appendChild(H1Nr3);

        const overlay2 = document.createElement('div');
        overlay2.setAttribute("class", "ovrelay2");
        ComeFirst.appendChild(overlay2);

        const overlay = document.createElement('div');
        overlay.setAttribute("class", "overlay");
        ComeFirst.appendChild(overlay);

    //Information, pollution, contact us, about us, enjoy display
    const ComeSecond = document.createElement('div');
    ComeSecond.setAttribute("class", "ComeSecond");
    StartAnimation.appendChild(ComeSecond);

        const sectionComeSecond = document.createElement('section');
        ComeSecond.appendChild(sectionComeSecond);
        const node4 = document.createTextNode("Information");
        sectionComeSecond.appendChild(node4);

        const flip = document.createElement('span');
        flip.setAttribute("id", "flip");
        sectionComeSecond.appendChild(flip);

            const flipDiv1 = document.createElement('div');
            flip.appendChild(flipDiv1);
            const flipDivDiv1 = document.createElement('div');
            flipDiv1.appendChild(flipDivDiv1);
            const node5 = document.createTextNode("Pollution");
            flipDivDiv1.appendChild(node5);

            const flipDiv2 = document.createElement('div');
            flip.appendChild(flipDiv2);
            const flipDivDiv2 = document.createElement('div');
            flipDiv2.appendChild(flipDivDiv2);
            const node6 = document.createTextNode("Contact Us");
            flipDivDiv2.appendChild(node6);

            const flipDiv3 = document.createElement('div');
            flip.appendChild(flipDiv3);
            const flipDivDiv3 = document.createElement('div');
            flipDiv3.appendChild(flipDivDiv3);
            const node7 = document.createTextNode("About Us");
            flipDivDiv3.appendChild(node7);
        
        const node8 = document.createTextNode("Enjoy!")
        sectionComeSecond.appendChild(node8);

//Website about section
const textContainer = document.createElement('section');
textContainer.setAttribute("class", "textContainer");
StartAnimation.insertAdjacentElement('afterend', textContainer);

    const about = document.createElement('div');
    textContainer.appendChild(about);

        const header3 = document.createElement('h3');
        about.appendChild(header3);
        const node9 = document.createTextNode("What is this page about?");
        header3.appendChild(node9);

        const para1 = document.createElement('p');
        const content1 = document.createTextNode('"The greatest threat to our planet is the belief that someone else will save it." - Robert Swan')
        para1.appendChild(content1);
        about.appendChild(para1);
        //need to decide what to insert in website about section!!!
        const para2 = document.createElement('p');
        const content2 = document.createTextNode("This is a pivotal point in the UK’s journey to Net Zero. The UK is one of the few countries with emissions targets in line with the long-term temperature goal of the Paris Agreement. Policy ambition has also moved substantially with the publication of the UK’s Net Zero Strategy. In most areas, these ambitions are credible, in line with the required pace and scale of change. It is now time to deliver the promised action. ");
        para2.appendChild(content2);
        about.appendChild(para2);

        const para3 = document.createElement('p');
        const content3 = document.createTextNode("On this website we aim to introduce those interested in opening their eyes to the ever growing climate dilema to our findings and research. We are forever expanding our research and docuements and will regularly update this website to any findings or investigations done.")
        para3.appendChild(content3);
        about.appendChild(para3);

        //Climate images
const sectionBanner = document.createElement('section');
sectionBanner.setAttribute("class", "section-banner banner2");
textContainer.insertAdjacentElement('afterend', sectionBanner);

    const bannerBox1 = document.createElement('div');
    bannerBox1.setAttribute("class", "banner-box banner-box1");
    sectionBanner.appendChild(bannerBox1);

        const box1Div = document.createElement('div');
        bannerBox1.appendChild(box1Div);

            const box1header4 = document.createElement('h4');
            const node10 = document.createTextNode("Dry Areas");
            box1header4.appendChild(node10);
            box1Div.appendChild(box1header4);

            const box1header2 = document.createElement('h2');
            const node11 = document.createTextNode("Desert");
            box1header2.appendChild(node11);
            box1Div.appendChild(box1header2);
    
    const bannerBox2 = document.createElement('div')
    bannerBox2.setAttribute("class", "banner-box banner-box2");
    sectionBanner.appendChild(bannerBox2);

        const box2Div = document.createElement('div');
        bannerBox2.appendChild(box2Div);

            const box2header4 = document.createElement('h4');
            const node12 = document.createTextNode("Melting");
            box2header4.appendChild(node12);
            box2Div.appendChild(box2header4);

            const box2header2 = document.createElement('h2');
            const node13 = document.createTextNode("Iceberg");
            box2header2.appendChild(node13);
            box2Div.appendChild(box2header2);
    
const sectionMiddle = document.createElement('section');
sectionMiddle.setAttribute ("class", "section-bannerMiddle");
sectionBanner.insertAdjacentElement('afterend', sectionMiddle);

    const middleDiv = document.createElement('div');
    sectionMiddle.appendChild(middleDiv);

        const middleHeader4 = document.createElement('h4');
        const node14 = document.createTextNode("Nature could be");
        middleHeader4.appendChild(node14);
        middleDiv.appendChild(middleHeader4);

        const middleHeader2 = document.createElement('h2');
        const node15 = document.createTextNode("Healthy");
        middleHeader2.appendChild(node15);
        middleDiv.appendChild(middleHeader2);



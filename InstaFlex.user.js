// ==UserScript==
// @name         InstaFlex
// @namespace    http://tampermonkey.net/
// @version      1.0
// @icon         https://cdn-icons.flaticon.com/png/512/717/premium/717414.png?token=exp=1643811970~hmac=21bbf85bb2f99366dfac460aeddd3e53
// @description  A Dark Mode, Downloader and Hotkeys(?) Script for Instagram.
// @author       Felix Pieber
// @match        https://www.instagram.com/*
// @match        https://about.instagram.com/*
// @match        https://help.instagram.com/*
// @match        https://business.facebook.com/creatorstudio*
// @website      https://felixpieber.github.io/web/
// @supportURL   https://www.instagram.com/flex_the_fox/
// @updateURL    https://felixpieber.github.io/web/projects/Downloads/Dark.Instagram.user.js/
// @grant        none
// ==/UserScript==

// icon from edt.im 

/// - - - DARKMODE - - - ///

function addGlobalStyle(css) {
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if (!head) { return; }
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

//instagram.com
    //general
        addGlobalStyle('.SCxLW, ._8Rna9, .oYYFH, .oNO81, .S-mcP, .N9abW, .BvMHM, .wW1cu, .DPiy6, ._4Kbb_, ._54f4m, .HcJZg, .rOtsg, .ZUqME, .QOqBd, .AvhYw, .nLL4f, .TOh1s, .-qQT3:hover, ._9eogI, .DHo8h, ._6zPK7, .PS7Gk  { background-color: #212529 !important; }'); //background
        addGlobalStyle('.AvhYw, .nLL4f, .TOh1s, .-qQT3 { border: solid 1px #212529 !important; }'); //borders like background color

            //text
            addGlobalStyle('.gmFkV, .FPmhX, .xLCgt, .fKFbl, .Yk1V7, .QXEMa, .kHYQv { color: #1DA1F2 !important; }'); //usernames text into blue
            addGlobalStyle('.eebAO, .O4GlU, ._8Pl3R, .xil3i, .Nm9Fw, .zV_Nj, .m82CD, .eiUFA, .vy6Bb, .k9GMp, .EcJQs, .wW1cu, .h-aRd, .JLJ-B, .p7vTm, .F0B8Y, .AC7dP, .eE-OA, .sxIVS, .HgNB_, .bt7LU, .ufStW, .U17kh, .k8Vux, .QlxVY, .VIsJD, .rkEop, textarea, ._5f5mN, .-fzfL, ._6VtSN, .yZn4P, .izU2O, .b_nGN, .swB58 { color: #CED4DA !important; }'); //text into grey
            addGlobalStyle('.sqdOP { color: #ffffff !important; }'); //text into white
            addGlobalStyle('.xil3i, .notranslate, .heKAw { color: #0096c7 !important; }'); //hashtags and links
        
            addGlobalStyle('button, svg, path, ._8-yf5, .yC0tu, .glyphsSpriteFriend_Follow u-__7 { color: #000000 !important;}'); //buttons
            addGlobalStyle('svg, span { fill: #000000 !important;}'); //buttons fill
            addGlobalStyle(' { border: solid 1px #000000 !important; }'); //black border color

    //home feed page
        addGlobalStyle('._lz6s { background-color: #343A40 !important; }'); //header background
        addGlobalStyle('._lz6s { border: solid 1px #343A40 !important; }'); //header border color

        addGlobalStyle('.zGtbP { background-color: #212529 !important; }'); //story background
        addGlobalStyle('.zGtbP { border: solid 1px #212529 !important; }'); //story border color

        addGlobalStyle('.UE9AK, ._97aPb, .cv3IO, .PZuss, .wo9IH  { background-color: #343A40 !important; }'); //post background
        addGlobalStyle('._8Rm4L, .sH9wk, .UE9AK, .eo2As, .ltEKP { border: solid 1px #343A40 !important; }'); //post border color
        addGlobalStyle('.EtaWk, .eo2As { background-color: #343A40 !important; }'); //post comment pop up background
        addGlobalStyle('span { color: #CED4DA !important; } '); //post comment pop up text into grey
        addGlobalStyle('._1XyCr { background-color: #343A40 !important; }'); //post share pop up background

        addGlobalStyle('._8UZ6e, .tHaIX { background-color: #212529 !important; }'); //"suggestions for you" background

        addGlobalStyle('.ByB5K, .enqOc { background-color: #343A40 !important; }'); //Covid-19 info background

    //direct page
        addGlobalStyle('.oYYFH, .pV7Qt, .oNO81, .S-mcP, .aOOlW { border: solid 1px #212529 !important; }'); //no white boders
        addGlobalStyle('.pV7Qt, ._6Rvw2 { background-color: #343A40 !important; }'); //content background
        //addGlobalStyle('.class { background-color: #6930C3 !important; }'); //my message color
        //addGlobalStyle('.class { background-color: #6930C3 !important; }'); //your message color

    //account page
        addGlobalStyle('.Nd_Rl, .fx7hk, ._4Kbb_, ._54f4m, .ySN3v { border-top: 1px solid #212529 !important; }'); //no white border
        addGlobalStyle('.Pmh1O, ._829vi { color: #979ca1 !important; }'); //pronounce and category

        //known issues: the unfollow button with the person is not displayed

    //search page
        addGlobalStyle('._01UL2, .TOh1s { background-color: #212529 !important; }'); //background

    //login page
        addGlobalStyle('.rgFsT, .gr27e { background-color: #343A40 !important; }'); //content background
        addGlobalStyle('.rgFsT, .gr27e { border: solid 1px #343A40 !important; }'); //content border color

//help.instagram.com
    addGlobalStyle('.dp1hu0rb, .d2edcug0, .taijpn5t, .j83agx80, .gs1a9yip, .cddn0xzi, .czqri4pq, .dati1w0a, .poy2od1o, .kr520xx4, .k4urcfbm, .tkr6xdv7 { background-color: #212529 !important; }'); //background color

//creator.studio -- not done
    //not started yet










/// - - - DOWNLOADER - - - ///

(function () {
    'use strict';
    // =================
    // =    Options    =
    // =================
    const attachLink = true; // add link into the button elements
    const postFilenameTemplate = "%id%-%datetime%-%medianame%.%ext%";
    const storyFilenameTemplate = postFilenameTemplate;

    // ==================

    function yyyymmdd(date) {
        var mm = date.getMonth() + 1; // getMonth() is zero-based
        var dd = date.getDate();

        return [date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
        ].join('');
    }

    var svgDownloadBtn =
        `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="24" width="24"
	 viewBox="0 0 477.867 477.867" style="fill:%color;" xml:space="preserve">
	<g>
		<path d="M443.733,307.2c-9.426,0-17.067,7.641-17.067,17.067v102.4c0,9.426-7.641,17.067-17.067,17.067H68.267
			c-9.426,0-17.067-7.641-17.067-17.067v-102.4c0-9.426-7.641-17.067-17.067-17.067s-17.067,7.641-17.067,17.067v102.4
			c0,28.277,22.923,51.2,51.2,51.2H409.6c28.277,0,51.2-22.923,51.2-51.2v-102.4C460.8,314.841,453.159,307.2,443.733,307.2z"/>
	</g>
	<g>
		<path d="M335.947,295.134c-6.614-6.387-17.099-6.387-23.712,0L256,351.334V17.067C256,7.641,248.359,0,238.933,0
			s-17.067,7.641-17.067,17.067v334.268l-56.201-56.201c-6.78-6.548-17.584-6.36-24.132,0.419c-6.388,6.614-6.388,17.099,0,23.713
			l85.333,85.333c6.657,6.673,17.463,6.687,24.136,0.031c0.01-0.01,0.02-0.02,0.031-0.031l85.333-85.333
			C342.915,312.486,342.727,301.682,335.947,295.134z"/>
	</g>
</svg>`;

    var svgNewtabBtn =
        `<svg id="Capa_1" style="fill:%color;" viewBox="0 0 482.239 482.239" xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path d="m465.016 0h-344.456c-9.52 0-17.223 7.703-17.223 17.223v86.114h-86.114c-9.52 0-17.223 7.703-17.223 17.223v344.456c0 9.52 7.703 17.223 17.223 17.223h344.456c9.52 0 17.223-7.703 17.223-17.223v-86.114h86.114c9.52 0 17.223-7.703 17.223-17.223v-344.456c0-9.52-7.703-17.223-17.223-17.223zm-120.56 447.793h-310.01v-310.01h310.011v310.01zm103.337-103.337h-68.891v-223.896c0-9.52-7.703-17.223-17.223-17.223h-223.896v-68.891h310.011v310.01z"/>
</svg>`;

    document.addEventListener('keydown', keyDownHandler);

    function keyDownHandler(event) {
        if (window.location.href === 'https://www.instagram.com/') return;

        if (event.altKey && event.key === 'k') {
            let buttons = document.getElementsByClassName('download-btn');
            if (buttons.length > 0) {
                let mockEvent = { currentTarget: buttons[buttons.length - 1] };
                if (attachLink) onMouseInHandler(mockEvent);
                onClickHandler(mockEvent);
            }
        }
        if (event.altKey && event.key === 'i') {
            let buttons = document.getElementsByClassName('newtab-btn');
            if (buttons.length > 0) {
                let mockEvent = { currentTarget: buttons[buttons.length - 1] };
                if (attachLink) onMouseInHandler(mockEvent);
                onClickHandler(mockEvent);
            }
        }

        if (event.altKey && event.key === 'l') {
            // right arrow
            let buttons = document.getElementsByClassName('coreSpriteRightChevron');
            if (buttons.length > 0) {
                buttons[0].click();
            }
        }

        if (event.altKey && event.key === 'j') {
            // left arrow
            let buttons = document.getElementsByClassName('coreSpriteLeftChevron');
            if (buttons.length > 0) {
                buttons[0].click();
            }
        }
    }

    var checkExistTimer = setInterval(function () {
        let sharePostSelector = "article section span button";
        let storySeletor = "header button > div";
        let profileSelector = "header section svg circle";

        // check profile
        if (document.getElementsByClassName("custom-btn").length === 0) {
            if (document.querySelector(profileSelector)) {
                addCustomBtn(document.querySelector(profileSelector), "black", append2Header);
            }
        }

        // check story
        if (document.getElementsByClassName("custom-btn").length === 0) {
            if (document.querySelector(storySeletor)) {
                addCustomBtn(document.querySelector(storySeletor), "white", append2Post);
            }
        }

        // check post
        let articleList = document.querySelectorAll("article");
        for (let i = 0; i < articleList.length; i++) {
            if (articleList[i].querySelector(sharePostSelector) &&
                articleList[i].getElementsByClassName("custom-btn").length === 0) {
                addCustomBtn(articleList[i].querySelector(sharePostSelector), "black", append2Post);
            }
        }
    }, 500);

    function append2Header(node, btn) {
        node.parentNode.parentNode.parentNode.appendChild(btn, node.parentNode.parentNode);
    }

    function append2Post(node, btn) {
        node.parentNode.parentNode.appendChild(btn);
    }

    function addCustomBtn(node, iconColor, appendNode) {
        // add download button and set onclick handler
        // add newtab button
        let newtabBtn = createCustomBtn(svgNewtabBtn, iconColor, "newtab-btn", "16px");
        appendNode(node, newtabBtn);

        // add download button
        let downloadBtn = createCustomBtn(svgDownloadBtn, iconColor, "download-btn", "14px");
        appendNode(node, downloadBtn);
    }

    function createCustomBtn(svg, iconColor, className, marginLeft) {
        let newBtn = document.createElement("a");
        newBtn.innerHTML = svg.replace('%color', iconColor);
        newBtn.setAttribute("class", "custom-btn " + className);
        newBtn.setAttribute("target", "_blank");
        newBtn.setAttribute("style", "cursor: pointer;margin-left: " + marginLeft + ";margin-top: 8px;");
        newBtn.onclick = onClickHandler;
        if (attachLink) newBtn.onmouseenter = onMouseInHandler;
        if (className.includes("newtab")) {
            newBtn.setAttribute("title", "Open in new tab");
        } else {
            newBtn.setAttribute("title", "Download");
        }
        return newBtn;
    }

    function onClickHandler(e) {
        // handle button click
        let target = e.currentTarget;
        e.stopPropagation();
        e.preventDefault();
        if (window.location.pathname.includes('stories')) {
            storyOnClicked(target);
        } else if (document.querySelector('header') &&
            document.querySelector('header').contains(target)) {
            profileOnClicked(target);
        } else {
            postOnClicked(target);
        }
    }

    function onMouseInHandler(e) {
        let target = e.currentTarget;
        if (!attachLink) return;
        if (window.location.pathname.includes('stories')) {
            storyOnMouseIn(target);
        } else if (document.querySelector('header') &&
            document.querySelector('header').contains(target)) {
            profileOnMouseIn(target);
        } else {
            postOnMouseIn(target);
        }
    }

    function profileOnMouseIn(target) {
        let url = profileGetUrl(target);
        target.setAttribute("href", url);
    }

    function profileOnClicked(target) {
        // extract profile picture url and download or open it
        let url = profileGetUrl(target);
        let filename = '.png';

        if (url.length > 0) {
            // check url
            if (target.getAttribute("class").includes("download-btn")) {
                // generate filename
                let posterName = document.querySelector('header h2').textContent;
                filename = posterName + filename;
                downloadResource(url, filename);
            } else {
                // open url in new tab
                openResource(url);
            }
        }
    }

    function profileGetUrl(target) {
        let img = document.querySelector('header img');
        let url = img.getAttribute('src');
        return url;
    }

    async function postOnMouseIn(target) {
        let articleNode = postGetArticleNode(target);
        let url = await postGetUrl(target, articleNode);
        target.setAttribute("href", url);
    }

    async function postOnClicked(target) {
        // extract url from target post and download or open it
        let articleNode = postGetArticleNode(target);
        let url = await postGetUrl(target, articleNode);

        // ==============================
        // = download or open media url =
        // ==============================
        if (url.length > 0) {
            // check url
            if (target.getAttribute("class").includes("download-btn")) {
                let mediaName = url.split('?')[0].split('\\').pop().split('/').pop();
                let ext = mediaName.substr(mediaName.lastIndexOf('.') + 1);
                mediaName = mediaName.substring(0, mediaName.lastIndexOf('.') + 1);
                let datetime = new Date(articleNode.querySelector('time').getAttribute('datetime'));
                datetime = yyyymmdd(datetime) + '_' + datetime.toTimeString().split(' ')[0].replace(/:/g, '');
                let posterName = articleNode.querySelector('header a').getAttribute('href').replace(/\//g, '');

                let filename = filenameFormat(postFilenameTemplate, posterName, datetime, mediaName, ext);
                downloadResource(url, filename);
            } else {
                // open url in new tab
                openResource(url);
            }
        }
    }

    function postGetArticleNode(target) {
        let articleNode = target;
        while (articleNode && articleNode.tagName !== "ARTICLE") {
            articleNode = articleNode.parentNode;
        }
        return articleNode;
    }

    async function postGetUrl(target, articleNode) {
        // meta[property="og:video"]
        let list = articleNode.querySelectorAll('li[style][class]');
        let url = "";
        if (list.length === 0) {
            // single img or video
            if (articleNode.querySelector('article  div > video')) {
                let videoElem = articleNode.querySelector('article  div > video');
                url = videoElem.getAttribute('src');
                if (videoElem.hasAttribute('videoURL')) {
                    url = videoElem.getAttribute('videoURL');
                } else if (url === null || url.includes('blob')) {
                    url = await fetchVideoURL(articleNode, videoElem);
                }
            } else if (articleNode.querySelector('article  div[role] div > img')) {
                url = articleNode.querySelector('article  div[role] div > img').getAttribute('src');
            } else {
                console.log("Err: not find media at handle post single");
            }
        } else {
            // multiple imgs or videos
            let idx = 0;
            // check current index
            if (!articleNode.querySelector('.coreSpriteLeftChevron')) {
                idx = 0;
            } else if (!articleNode.querySelector('.coreSpriteRightChevron')) {
                idx = list.length - 1;
            } else idx = 1;

            let node = list[idx];
            if (node.querySelector('video')) {
                let videoElem = node.querySelector('video');
                url = videoElem.getAttribute('src');
                if (videoElem.hasAttribute('videoURL')) {
                    url = videoElem.getAttribute('videoURL');
                } else if (url === null || url.includes('blob')) {
                    url = await fetchVideoURL(articleNode, videoElem);
                }
            } else if (node.querySelector('img')) {
                url = node.querySelector('img').getAttribute('src');
            }
        }
        return url
    }

    async function fetchVideoURL(articleNode, videoElem) {
        let poster = videoElem.getAttribute('poster');
        let timeNodes = articleNode.querySelectorAll('time');
        let posterUrl = timeNodes[timeNodes.length - 1].parentNode.href;
        let posterPattern = /\/([^\/?]*)\?/;
        let posterMatch = poster.match(posterPattern);
        let postFileName = posterMatch[1];
        let pattern = new RegExp(`${postFileName}.*?video_url":("[^"]*")`, 's');
        let resp = await fetch(posterUrl);
        let content = await resp.text();
        let match = content.match(pattern);
        let videoUrl = JSON.parse(match[1]);
        videoUrl = videoUrl.replace(/^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/g, 'https://scontent.cdninstagram.com');
        videoElem.setAttribute('videoURL', videoUrl)
        return videoUrl;
    }

    function storyOnMouseIn(target) {
        let sectionNode = storyGetSectionNode(target);
        let url = storyGetUrl(target, sectionNode);
        target.setAttribute('href', url);
    }

    function storyOnClicked(target) {
        // extract url from target story and download or open it
        let sectionNode = storyGetSectionNode(target);
        let url = storyGetUrl(target, sectionNode);

        // ==============================
        // = download or open media url =
        // ==============================
        if (target.getAttribute("class").includes("download-btn")) {
            let mediaName = url.split('?')[0].split('\\').pop().split('/').pop();
            let ext = mediaName.substr(mediaName.lastIndexOf('.') + 1);
            mediaName = mediaName.substring(0, mediaName.lastIndexOf('.') + 1);
            let datetime = new Date(sectionNode.querySelector('time').getAttribute('datetime'));
            datetime = yyyymmdd(datetime) + '_' + datetime.toTimeString().split(' ')[0].replace(/:/g, '');
            let posterName = sectionNode.querySelector('header a').getAttribute('href').replace(/\//g, '');

            let filename = filenameFormat(storyFilenameTemplate, posterName, datetime, mediaName, ext);
            downloadResource(url, filename);
        } else {
            // open url in new tab
            openResource(url);
        }
    }

    function storyGetSectionNode(target) {
        let sectionNode = target;
        while (sectionNode && sectionNode.tagName !== "SECTION") {
            sectionNode = sectionNode.parentNode;
        }
        return sectionNode;
    }

    function storyGetUrl(target, sectionNode) {
        let url = "";
        if (sectionNode.querySelector('video > source')) {
            url = sectionNode.querySelector('video > source').getAttribute('src');
        } else if (sectionNode.querySelector('img[decoding="sync"]')) {
            let img = sectionNode.querySelector('img[decoding="sync"]');
            url = img.srcset.split(/ \d+w/g)[0].trim(); // extract first src from srcset attr. of img
            if (url.length > 0) {
                return url;
            }
            url = sectionNode.querySelector('img[decoding="sync"]').getAttribute('src');
        }
        return url;
    }

    function filenameFormat(template, id, datetime, medianame, ext) {
        let filename = template;
        filename = filename.replaceAll("%id%", id);
        filename = filename.replaceAll("%datetime%", datetime);
        filename = filename.replaceAll("%medianame%", medianame);
        filename = filename.replaceAll("%ext%", ext);
        return filename;
    }

    function openResource(url) {
        // open url in new tab
        var a = document.createElement('a');
        a.href = url;
        a.setAttribute("target", "_blank");
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    function forceDownload(blob, filename) {
        // ref: https://stackoverflow.com/questions/49474775/chrome-65-blocks-cross-origin-a-download-client-side-workaround-to-force-down
        var a = document.createElement('a');
        a.download = filename;
        a.href = blob;
        // For Firefox https://stackoverflow.com/a/32226068
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    // Current blob size limit is around 500MB for browsers
    function downloadResource(url, filename) {
        // ref: https://stackoverflow.com/questions/49474775/chrome-65-blocks-cross-origin-a-download-client-side-workaround-to-force-down
        console.log(url);
        if (!filename) filename = url.split('\\').pop().split('/').pop();
        fetch(url, {
            headers: new Headers({
                'Origin': location.origin
            }),
            mode: 'cors'
        })
            .then(response => response.blob())
            .then(blob => {
                let blobUrl = window.URL.createObjectURL(blob);
                forceDownload(blobUrl, filename);
            })
            .catch(e => console.error(e));
    }
})();










/// - - - HOTKEYS - - -///

/*
SHORTCUTS:
press "?" to display keyboard shortcut list.
*/

(eHelp => {
  addEventListener("keydown", function(ev, ele) {
    if (
      (document.activeElement &&
        ((/^(INPUT|TEXTAREA)$/).test(document.activeElement.tagName) || document.activeElement.isContentEditable)
      )
    ) {
      return;
    } else if (ev.ctrlKey || ev.altKey) {
      return;
      //popup with "?"
    } if (ev.key === "?") {
      if (!eHelp) {
        (eHelp = document.createElement("DIV")).id = "help";
        eHelp.innerHTML = `
        <style>
            #help {
                position:fixed;
                z-index:999999999;
                left:0;
                top:0;
                right:0;
                bottom:0;
                background:rgb(0,0,0,0.5);
                cursor:pointer
            }
            #popup {
                position:fixed;
                right:.5em;
                bottom:.5em;
                border:2px solid #000;
                border-radius:.5em;
                padding:.5em;
                background:#343A40;
                font-size:12pt;
                line-height:normal
            }
            #title {
                margin-bottom:.5em;
                font-size:14pt;
                font-weight:bold;
                line-height:normal
                color:#CED4DA;
            }
            a {
                color: black
            }
            #list tr:nth-child(2n+1) {
                background:#343A40
            }
            #list td {
                padding:.05em .3em;
                vertical-align:middle;
                font-size:12pt;
                font-weight:normal;
                line-height:normal
            }
            #list div {
                display:inline-block;
                border-radius:.3em;
                min-width:1.6em;
                background:#343A40;
                text-align:center;
                font-weight:bold;
                line-height:1.4em
            }
        </style>

        <div id="popup">
            <div id="title">
                <a href="repo_url">InstaFlex</a>
            </div>
            <div>
                <a href="https://github.com/felixpieber" style="color: grey; font-size: 10px"> by Felix Pieber</a>
            </div>
            <br>
            <table id="list">
                <tr><td><div>F</div></td><td>Toggle follow / unfollow.</td></tr>
                <tr><td><div>1</div></td><td>Pick first post on the page (if none picked yet).</td></tr>
                <tr><td><div>L</div></td><td>Toggle like / unlike.</td></tr>
                <tr><td><div>S</div></td><td>Toggle save / unsave.</td></tr>
                <tr><td><div>[</div>, <div>]</div> or <div>A</div>, <div>D</div></td><td>Navigate to previous / next post.</td></tr>
                <tr><td><div>N</div>, <div>M</div></td><td>Navigate to previous / next media in the post.<br />If there's no more, navigate to previous / next post.</td></tr>
                <tr><td><div>Space</div></td><td>Play / pause video in the post.</td></tr>
                <tr><td><div>A</div>, <div>S</div></td><td>Rewind / fast forward video in the post by 10 seconds.</td></tr>
                <tr><td><div>Esc</div><td>To exit a post.</td></tr>
                <tr><td><div>?</div></td><td>Display this list.</td></tr>
            </table>
        </div>`;

        eHelp.onclick = () => eHelp.remove();
      }
      if (eHelp.parentNode) {
        eHelp.remove();
      } else document.documentElement.appendChild(eHelp);
      return;
    } else if (ev.shiftKey) return;
    switch (ev.key.toUpperCase()) {
      case "F": //follow/unfollow
        if (ele = document.querySelector(".oW_lN,._6VtSN") || document.querySelector(".HfISj>._4pI4F")) ele.click();
        break;
      case "1": //pick first post on the page
        if (!document.querySelector(".L_LMM") && (ele = document.querySelector(".v1Nh3>a"))) ele.click();
        break;
      case "L": //like/unlike post
        if (ele = document.querySelector(".fr66n>button")) ele.click();
        break;
      case "S": //save/unsave post
        if (ele = document.querySelector(".wmtNn>button")) ele.click();
        break;
      case "A": //previous post
      case "[":
        if (ele = document.querySelector(".ITLxV")) ele.click();
        break;
      case "D": //next post
      case "]":
        if (ele = document.querySelector("._65Bje")) ele.click();
        break;
      case "N": //previous post's picture/video
        if (ele = document.querySelector(".POSa_")) {
          ele.click();
        } else if (ele = document.querySelector(".ITLxV")) ele.click();
        break;
      case "M": //next post's picture/video
        if (ele = document.querySelector("._6CZji")) {
          ele.click();
        } else if (ele = document.querySelector("._65Bje")) ele.click();
        break;
      case "Space": //play/pause post's video
        switch ((ele = document.querySelectorAll("._2dDPU .vi798 .Ckrof")).length) {
          case 3:
            if (document.querySelector("._6CZji")) {
              ele = document.querySelector(".POSa_") ? ele[1] : ele[0];
            } else ele = ele[2];
            break;
          case 2:
            if (document.querySelector("._6CZji")) {
              ele = ele[0];
            } else ele = ele[1];
            break;
          case 1:
            ele = ele[0];
            break;
          default:
            return;
        }
        if (ele = ele.querySelector(".fXIG0")) ele.click();
        break;
      case "A": //rewind post's video by 10 seconds
        if (ele = document.querySelector(".tWeCl")) ele.currentTime -= 10;
        break;
      case "S": //fast forward post's video by 10 seconds
        if (ele = document.querySelector(".tWeCl")) ele.currentTime += 10;
        break;
    }
  });
})();
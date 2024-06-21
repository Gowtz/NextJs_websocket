'use client'

// import hljs from "highlight.js"
import 'highlight.js/styles/tokyo-night-dark.css';
import hljs from "highlight.js/lib/core";

import { code } from './sampleCode';

import { useEffect, useState } from "react";
import sql from "highlight.js/lib/languages/sql";
import javascript from "highlight.js/lib/languages/javascript";
import c from "highlight.js/lib/languages/c";
import css from "highlight.js/lib/languages/css";
import scss from "highlight.js/lib/languages/scss";
import shell from "highlight.js/lib/languages/shell";
import python from "highlight.js/lib/languages/python";
import powershell from "highlight.js/lib/languages/powershell";
import cpp from "highlight.js/lib/languages/cpp";
import php from "highlight.js/lib/languages/php";
import phpTemplate from "highlight.js/lib/languages/php-template";
import xml from "highlight.js/lib/languages/xml";

export default function Codelayout() {
    const [lang, setLang] = useState("js")
    // =============================HLJS===================================
    useEffect(() => {
        hljs.registerLanguage("sql", sql);
        hljs.registerLanguage("javascript", javascript);
        hljs.registerLanguage("python", python);
        hljs.registerLanguage("c", c);
        hljs.registerLanguage("cpp", cpp);
        hljs.registerLanguage("powershell", powershell);
        hljs.registerLanguage("shell", shell);
        hljs.registerLanguage("scss", scss);
        hljs.registerLanguage("css", css);
        hljs.registerLanguage("php", php);
        hljs.registerLanguage("php-template", phpTemplate);
        hljs.registerLanguage("html", xml);
        hljs.registerLanguage("xml", xml);
    }, []);
    useEffect(() => {
        hljs.highlightAll();
        // hljs.initHighlightingOnLoad();
        addEventListener('load', function () {
            var blocks = document.querySelectorAll('pre code.hljs');
            Array.prototype.forEach.call(blocks, function (block) {
                var language = block.result.language;

                // console.log(language)
                block.insertAdjacentHTML("afterbegin", `<span class="label">${language}</span>`)
            });
        })
    });


    // ===================================END==============================

  
    return (
        <>

<div className="page ">

            <h1 className="font-semibold text-3xl">FileName</h1>

            <div className="codeblock overflow-hidden">
             
                <pre className="code relative  p-5 bg-inherit  text-white h-full w-full rounded-lg overflow-hidden">

                    <code className={`language-${lang} rounded-lg `}>


                  <br />
                        {code}

                    </code>
                    <span className='lable absolute top-5 right-5 px-3 bg-slate-700 rounded-tr rounded-bl'>{lang}</span>

                </pre>
            </div>
            
</div>
        </>
    )
}

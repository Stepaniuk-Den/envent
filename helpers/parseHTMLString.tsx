// export function parseHTMLString(htmlString: string) {
//   const elements = htmlString.split(/(<br\s*\/?>)/g);
//   return elements.map((element, index) => {
//     if (element === "<br>" || element === "<br/>") return <br key={index} />;
//     return element;
//   });
// }

// export function parseHTMLString(htmlString: string) {
//   const elements = htmlString.split(/(<\/?strong>|<br\s*\/?>|<s\s*\/?>)/g);
//   console.log("elements - ", elements);
//   return elements.map((element, index) => {
//     console.log("element - ", element);
//     if (element === "<br>" || element === "<br/>") return <br key={index} />;
//     if (element === "<s/>")
//       return <strong key={index}>{elements[index + 1]}</strong>;
//     return element;
//   });
// }

//Працюючий варіант----
// import React from 'react';

// export function parseHTMLString(htmlString: string): React.ReactNode[] {
//     // Розділімо HTML-рядок на частини, включаючи тег <s/> і <br>
//     const elements = htmlString.split(/(<\/?s\s*\/?>|<br\s*\/?>)/g);
//     const result: React.ReactNode[] = [];
//     let isInS = false; // Відстежуємо, чи всередині <s/> тега
//     let pendingText = ""; // Накопичує текст до <s/>
//     let firstPartHandled = false; // Флаг для першого абзацу

//     elements.forEach((element, index) => {
//         if (element === "<br>" || element === "<br/>") {
//             result.push(<br key={index} />);
//         } else if (element === "<s/>") {
//             if (pendingText) {
//                 // Додаємо накопичений текст як перший абзац
//                 result.push(<strong key={index}>{pendingText}</strong>);
//                 pendingText = "";
//             }
//             // Встановлюємо флаг, що ми всередині <s/> тега
//             isInS = true;
//         } else if (isInS) {
//             // Накопичуємо текст, якщо всередині <s/>
//             result.push(element);
//         } else {
//             // Накопичуємо текст до першого <s/>
//             pendingText += element;
//             firstPartHandled = true;
//         }
//     });

//     // Додаємо залишковий текст, якщо є
//     if (pendingText && !isInS) {
//         result.push(<strong key={elements.length}>{pendingText}</strong>);
//     }

//     return result;
// }

import React from 'react';

export function parseHTMLString(htmlString: string): React.ReactNode[] {
    // Розділімо HTML-рядок на частини, включаючи тег <s/> і <br>
    const elements = htmlString.split(/(<\/?s\s*\/?>|<br\s*\/?>)/g);
    const result: React.ReactNode[] = [];
    let isInS = false; // Відстежуємо, чи всередині <s/> тега
    let pendingText = ""; // Накопичує текст до <s/>
    let hasS = false; // Перемикач для перевірки наявності тегу <s/>

    elements.forEach((element, index) => {
        if (element === "<br>" || element === "<br/>") {
            result.push(<br key={index} />);
        } else if (element === "<s/>") {
            if (pendingText) {
                // Додаємо накопичений текст як перший абзац
                result.push(<strong key={index}>{pendingText}</strong>);
                pendingText = "";
            }
            // Встановлюємо флаг для тегу <s/>
            isInS = true;
            hasS = true;
        } else if (isInS) {
            // Додаємо текст всередині <s/> без змін
            result.push(element);
        } else {
            // Накопичуємо текст до першого <s/>
            pendingText += element;
        }
    });

    // Додаємо залишковий текст, якщо є
    if (pendingText && !hasS) {
        result.push(pendingText); // Без виділення, якщо тегу <s/> немає
    } else if (pendingText) {
        result.push(<strong key={elements.length}>{pendingText}</strong>);
    }

    return result;
}


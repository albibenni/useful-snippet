function interpolate(str, params) {
    let names = Object.keys(params); // title, description
    let values = Object.values(params); // 'Example', 'A description example'
    const body = `return \`${str}\`;`;  // str => `<h1>${title}</h1><p>${description}</p>`
    return new Function(...names, body)(...values);
    //>> this will create:
    //  (function (title, description) {
    //      return `<h1>${title}</h1><p>${description}</p>`
    //  })('Example', 'A description example')

}

// Example of usage
const html = `<h1>${title}</h1><p>${description}</p>`
const finalHtml = interpolate(html, {
    title: "Example",
    description: "A description example",
});

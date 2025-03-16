/**
 * Complete the functions below, then run `npm run test` in the root directory to check your work.
 *
 * For more details on expected input and output, check the tests.
 * If all tests are green, you are done! Keep in mind that the actual implementation will be also reviewed.
 *
 * (don't forget about the html/css task in ../html-css!)
 *
 * If you find a buggy test, feel free to report (and/or fix) it.
 *
 * ========================================================================================================
 * */

/**
 * Creates a simple object for HTTP headers based on the input.
 *
 * The input is in the following format:
 * [
 *  [<Header-Name>, <header-value1>, <header-value2?>, ...],
 *  ...
 * ]
 *
 * Expected output: {
 *  <header-name>: '<header-value1>, <header-value2>, ...'
 * }
 *
 */
const createHttpHeaders = (headerList) => {
    if (!Array.isArray(headerList)) return {};

    return headerList.reduce((result, entry) => {
        if (!entry || entry.length < 2) return result;

        const key = entry[0].toLowerCase();
        const values = entry.slice(1);

        result[key] = result[key] ? `${result[key]}, ${values.join(', ')}` : values.join(', ');
        return result;
    }, {});
};

const getItems = (itemsArr, params) => {
    const { page = 1, pageSize = 4, sort = 'asc' } = params;
    const startIdx = (page - 1) * pageSize;
    const endIdx = startIdx + pageSize;

    let itemsCopy = [...itemsArr];
    if (sort === 'asc') {
        itemsCopy.sort((a, b) => a.id - b.id);
    } else if (sort === 'desc') {
        itemsCopy.sort((a, b) => b.id - a.id);
    }

    const pagedItems = itemsCopy.slice(startIdx, endIdx);

    return pagedItems.map((it) => ({
        id: it.id,
        title: { main: it.displayTitle }
    }));
};

module.exports = {
    createHttpHeaders,
    getItems
};

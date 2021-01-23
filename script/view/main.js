import '../component/beef-menu.js';
import '../component/custsearch-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("custsearch-bar");
    const beefMenuElement = document.querySelector("beef-menu");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchBeef(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        beefMenuElement.beefs = results;
    };

    const fallbackResult = message => {
        beefMenuElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
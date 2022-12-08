window.app.functionTabs = () => {

    const tabBoxes = document.querySelectorAll('.tabs-box');
    if (!tabBoxes) return;

    tabBoxes.forEach((tabBox) => {
        const tabsHead = tabBox.querySelector('.go-js-tabs-btns');
        const tabsBody = tabBox.querySelector('.go-js-tabs-list');

        const getActiveTabName = () => {
            return tabsHead.querySelector('.activ-btn').dataset.tab
        }

        const setActiveContent = () => {
            if (tabsBody.querySelector('.active-content')) { 
                tabsBody.querySelector('.active-content').classList.remove('active-content')
            }
            tabsBody.querySelector(`[data-tab=${getActiveTabName()}]`).classList.add('active-content') 
        }

        if (!tabsHead.querySelector('.activ-btn')) {
            tabsHead.querySelector('.tabs-btn__item').classList.add('activ-btn')
          }
      
          setActiveContent(getActiveTabName())

        
        tabsHead.addEventListener('click', e => {
            const caption = e.target.closest('.tabs-btn__item');
            if (!caption) return;
            if (caption.classList.contains('activ-btn')) return;
            if (tabsHead.querySelector('.activ-btn')) { 
                tabsHead.querySelector('.activ-btn').classList.remove('activ-btn');
            }
    
            caption.classList.add('activ-btn'); 
            setActiveContent(getActiveTabName()) 
        })
    });
 
};

window.app.functionTabs();
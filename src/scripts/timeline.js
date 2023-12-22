const milestones = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nisi odio. Nunc semper ultricies libero a commodo. Nam non pellentesque est. Vivamus pharetra, nunc ac commodo tempus, tellus orci aliquam sapien, in pharetra nunc tellus sit amet dolor. Pellentesque dolor sem, hendrerit nec ultricies et, viverra nec quam. Pellentesque ultricies maximus mi, mattis maximus orci maximus at. Suspendisse potenti. Pellentesque maximus risus non dui ullamcorper ultricies.',
    'Cras diam odio, viverra ut efficitur nec, iaculis eu justo. Pellentesque placerat et sem dapibus cursus. Nam mattis turpis accumsan augue lacinia, in ultricies neque blandit. Maecenas in nulla faucibus, auctor nibh semper, lacinia ipsum. Aliquam finibus commodo ligula sit amet facilisis. Vestibulum non risus tempor, venenatis nibh at, ultricies metus. Sed gravida blandit nisl non tempor. Integer sed metus mauris. Proin ultricies pulvinar egestas. Maecenas semper in erat quis laoreet.',
    'Vivamus laoreet massa ut magna vehicula iaculis. Curabitur nec purus eget orci molestie tempor. Curabitur ac consequat diam, ac placerat turpis. Donec turpis lectus, suscipit posuere egestas nec, aliquam at ex. Ut lobortis a lectus tristique ultricies. Proin volutpat vel sapien vel facilisis. Phasellus nec ante vitae velit mollis tempus sed sed nulla. Phasellus molestie ligula a neque volutpat, sed molestie felis imperdiet. Mauris egestas faucibus eleifend. Aliquam eu viverra elit. Nunc vestibulum aliquam augue. Sed non cursus turpis. Vestibulum vulputate eget ex a consequat. Vivamus ut ornare nulla.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc suscipit mi id felis consequat, in elementum tortor convallis. Mauris enim leo, pellentesque vel tincidunt non, vestibulum vitae purus. Suspendisse potenti. Fusce dignissim vitae tortor sit amet commodo. Vivamus id urna maximus, porta urna id, elementum tortor. Praesent imperdiet luctus gravida. Duis pretium augue et orci pulvinar, imperdiet ultricies risus rhoncus. Nunc mollis, sem et auctor eleifend, felis velit ornare sem, non imperdiet turpis urna a eros. Duis felis massa, volutpat at placerat sed, dapibus vel neque. Praesent ornare velit eget dolor vulputate dapibus. Donec non elementum diam. Ut pretium nibh id augue elementum venenatis.',
    'Vivamus varius tincidunt augue vulputate vulputate. Proin tortor elit, venenatis ac lectus finibus, maximus tincidunt ante. Aenean facilisis nibh nunc, vitae tempus enim congue vel. Phasellus accumsan mi urna, quis maximus est lobortis quis. Maecenas sollicitudin est id dolor facilisis elementum in vitae ex. Maecenas justo erat, vulputate eget dui id, fermentum dignissim sem. Nullam sagittis porta nunc, ut egestas arcu ultricies et. Vivamus vel metus ante. Proin nec nibh nunc. Suspendisse sit amet nisi neque. Nulla accumsan tincidunt ex.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nisi odio. Nunc semper ultricies libero a commodo. Nam non pellentesque est. Vivamus pharetra, nunc ac commodo tempus, tellus orci aliquam sapien, in pharetra nunc tellus sit amet dolor. Pellentesque dolor sem, hendrerit nec ultricies et, viverra nec quam. Pellentesque ultricies maximus mi, mattis maximus orci maximus at. Suspendisse potenti. Pellentesque maximus risus non dui ullamcorper ultricies.',
    'Cras diam odio, viverra ut efficitur nec, iaculis eu justo. Pellentesque placerat et sem dapibus cursus. Nam mattis turpis accumsan augue lacinia, in ultricies neque blandit. Maecenas in nulla faucibus, auctor nibh semper, lacinia ipsum. Aliquam finibus commodo ligula sit amet facilisis. Vestibulum non risus tempor, venenatis nibh at, ultricies metus. Sed gravida blandit nisl non tempor. Integer sed metus mauris. Proin ultricies pulvinar egestas. Maecenas semper in erat quis laoreet.',
    'Vivamus laoreet massa ut magna vehicula iaculis. Curabitur nec purus eget orci molestie tempor. Curabitur ac consequat diam, ac placerat turpis. Donec turpis lectus, suscipit posuere egestas nec, aliquam at ex. Ut lobortis a lectus tristique ultricies. Proin volutpat vel sapien vel facilisis. Phasellus nec ante vitae velit mollis tempus sed sed nulla. Phasellus molestie ligula a neque volutpat, sed molestie felis imperdiet. Mauris egestas faucibus eleifend. Aliquam eu viverra elit. Nunc vestibulum aliquam augue. Sed non cursus turpis. Vestibulum vulputate eget ex a consequat. Vivamus ut ornare nulla.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc suscipit mi id felis consequat, in elementum tortor convallis. Mauris enim leo, pellentesque vel tincidunt non, vestibulum vitae purus. Suspendisse potenti. Fusce dignissim vitae tortor sit amet commodo. Vivamus id urna maximus, porta urna id, elementum tortor. Praesent imperdiet luctus gravida. Duis pretium augue et orci pulvinar, imperdiet ultricies risus rhoncus. Nunc mollis, sem et auctor eleifend, felis velit ornare sem, non imperdiet turpis urna a eros. Duis felis massa, volutpat at placerat sed, dapibus vel neque. Praesent ornare velit eget dolor vulputate dapibus. Donec non elementum diam. Ut pretium nibh id augue elementum venenatis.',
    'Vivamus varius tincidunt augue vulputate vulputate. Proin tortor elit, venenatis ac lectus finibus, maximus tincidunt ante. Aenean facilisis nibh nunc, vitae tempus enim congue vel. Phasellus accumsan mi urna, quis maximus est lobortis quis. Maecenas sollicitudin est id dolor facilisis elementum in vitae ex. Maecenas justo erat, vulputate eget dui id, fermentum dignissim sem. Nullam sagittis porta nunc, ut egestas arcu ultricies et. Vivamus vel metus ante. Proin nec nibh nunc. Suspendisse sit amet nisi neque. Nulla accumsan tincidunt ex.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nisi odio. Nunc semper ultricies libero a commodo. Nam non pellentesque est. Vivamus pharetra, nunc ac commodo tempus, tellus orci aliquam sapien, in pharetra nunc tellus sit amet dolor. Pellentesque dolor sem, hendrerit nec ultricies et, viverra nec quam. Pellentesque ultricies maximus mi, mattis maximus orci maximus at. Suspendisse potenti. Pellentesque maximus risus non dui ullamcorper ultricies.',
    'Cras diam odio, viverra ut efficitur nec, iaculis eu justo. Pellentesque placerat et sem dapibus cursus. Nam mattis turpis accumsan augue lacinia, in ultricies neque blandit. Maecenas in nulla faucibus, auctor nibh semper, lacinia ipsum. Aliquam finibus commodo ligula sit amet facilisis. Vestibulum non risus tempor, venenatis nibh at, ultricies metus. Sed gravida blandit nisl non tempor. Integer sed metus mauris. Proin ultricies pulvinar egestas. Maecenas semper in erat quis laoreet.',
    'Vivamus laoreet massa ut magna vehicula iaculis. Curabitur nec purus eget orci molestie tempor. Curabitur ac consequat diam, ac placerat turpis. Donec turpis lectus, suscipit posuere egestas nec, aliquam at ex. Ut lobortis a lectus tristique ultricies. Proin volutpat vel sapien vel facilisis. Phasellus nec ante vitae velit mollis tempus sed sed nulla. Phasellus molestie ligula a neque volutpat, sed molestie felis imperdiet. Mauris egestas faucibus eleifend. Aliquam eu viverra elit. Nunc vestibulum aliquam augue. Sed non cursus turpis. Vestibulum vulputate eget ex a consequat. Vivamus ut ornare nulla.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc suscipit mi id felis consequat, in elementum tortor convallis. Mauris enim leo, pellentesque vel tincidunt non, vestibulum vitae purus. Suspendisse potenti. Fusce dignissim vitae tortor sit amet commodo. Vivamus id urna maximus, porta urna id, elementum tortor. Praesent imperdiet luctus gravida. Duis pretium augue et orci pulvinar, imperdiet ultricies risus rhoncus. Nunc mollis, sem et auctor eleifend, felis velit ornare sem, non imperdiet turpis urna a eros. Duis felis massa, volutpat at placerat sed, dapibus vel neque. Praesent ornare velit eget dolor vulputate dapibus. Donec non elementum diam. Ut pretium nibh id augue elementum venenatis.',
    'Vivamus varius tincidunt augue vulputate vulputate. Proin tortor elit, venenatis ac lectus finibus, maximus tincidunt ante. Aenean facilisis nibh nunc, vitae tempus enim congue vel. Phasellus accumsan mi urna, quis maximus est lobortis quis. Maecenas sollicitudin est id dolor facilisis elementum in vitae ex. Maecenas justo erat, vulputate eget dui id, fermentum dignissim sem. Nullam sagittis porta nunc, ut egestas arcu ultricies et. Vivamus vel metus ante. Proin nec nibh nunc. Suspendisse sit amet nisi neque. Nulla accumsan tincidunt ex.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nisi odio. Nunc semper ultricies libero a commodo. Nam non pellentesque est. Vivamus pharetra, nunc ac commodo tempus, tellus orci aliquam sapien, in pharetra nunc tellus sit amet dolor. Pellentesque dolor sem, hendrerit nec ultricies et, viverra nec quam. Pellentesque ultricies maximus mi, mattis maximus orci maximus at. Suspendisse potenti. Pellentesque maximus risus non dui ullamcorper ultricies.',
    'Cras diam odio, viverra ut efficitur nec, iaculis eu justo. Pellentesque placerat et sem dapibus cursus. Nam mattis turpis accumsan augue lacinia, in ultricies neque blandit. Maecenas in nulla faucibus, auctor nibh semper, lacinia ipsum. Aliquam finibus commodo ligula sit amet facilisis. Vestibulum non risus tempor, venenatis nibh at, ultricies metus. Sed gravida blandit nisl non tempor. Integer sed metus mauris. Proin ultricies pulvinar egestas. Maecenas semper in erat quis laoreet.',
    'Vivamus laoreet massa ut magna vehicula iaculis. Curabitur nec purus eget orci molestie tempor. Curabitur ac consequat diam, ac placerat turpis. Donec turpis lectus, suscipit posuere egestas nec, aliquam at ex. Ut lobortis a lectus tristique ultricies. Proin volutpat vel sapien vel facilisis. Phasellus nec ante vitae velit mollis tempus sed sed nulla. Phasellus molestie ligula a neque volutpat, sed molestie felis imperdiet. Mauris egestas faucibus eleifend. Aliquam eu viverra elit. Nunc vestibulum aliquam augue. Sed non cursus turpis. Vestibulum vulputate eget ex a consequat. Vivamus ut ornare nulla.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc suscipit mi id felis consequat, in elementum tortor convallis. Mauris enim leo, pellentesque vel tincidunt non, vestibulum vitae purus. Suspendisse potenti. Fusce dignissim vitae tortor sit amet commodo. Vivamus id urna maximus, porta urna id, elementum tortor. Praesent imperdiet luctus gravida. Duis pretium augue et orci pulvinar, imperdiet ultricies risus rhoncus. Nunc mollis, sem et auctor eleifend, felis velit ornare sem, non imperdiet turpis urna a eros. Duis felis massa, volutpat at placerat sed, dapibus vel neque. Praesent ornare velit eget dolor vulputate dapibus. Donec non elementum diam. Ut pretium nibh id augue elementum venenatis.',
    'Vivamus varius tincidunt augue vulputate vulputate. Proin tortor elit, venenatis ac lectus finibus, maximus tincidunt ante. Aenean facilisis nibh nunc, vitae tempus enim congue vel. Phasellus accumsan mi urna, quis maximus est lobortis quis. Maecenas sollicitudin est id dolor facilisis elementum in vitae ex. Maecenas justo erat, vulputate eget dui id, fermentum dignissim sem. Nullam sagittis porta nunc, ut egestas arcu ultricies et. Vivamus vel metus ante. Proin nec nibh nunc. Suspendisse sit amet nisi neque. Nulla accumsan tincidunt ex.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nisi odio. Nunc semper ultricies libero a commodo. Nam non pellentesque est. Vivamus pharetra, nunc ac commodo tempus, tellus orci aliquam sapien, in pharetra nunc tellus sit amet dolor. Pellentesque dolor sem, hendrerit nec ultricies et, viverra nec quam. Pellentesque ultricies maximus mi, mattis maximus orci maximus at. Suspendisse potenti. Pellentesque maximus risus non dui ullamcorper ultricies.',
    'Cras diam odio, viverra ut efficitur nec, iaculis eu justo. Pellentesque placerat et sem dapibus cursus. Nam mattis turpis accumsan augue lacinia, in ultricies neque blandit. Maecenas in nulla faucibus, auctor nibh semper, lacinia ipsum. Aliquam finibus commodo ligula sit amet facilisis. Vestibulum non risus tempor, venenatis nibh at, ultricies metus. Sed gravida blandit nisl non tempor. Integer sed metus mauris. Proin ultricies pulvinar egestas. Maecenas semper in erat quis laoreet.',
    'Vivamus laoreet massa ut magna vehicula iaculis. Curabitur nec purus eget orci molestie tempor. Curabitur ac consequat diam, ac placerat turpis. Donec turpis lectus, suscipit posuere egestas nec, aliquam at ex. Ut lobortis a lectus tristique ultricies. Proin volutpat vel sapien vel facilisis. Phasellus nec ante vitae velit mollis tempus sed sed nulla. Phasellus molestie ligula a neque volutpat, sed molestie felis imperdiet. Mauris egestas faucibus eleifend. Aliquam eu viverra elit. Nunc vestibulum aliquam augue. Sed non cursus turpis. Vestibulum vulputate eget ex a consequat. Vivamus ut ornare nulla.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc suscipit mi id felis consequat, in elementum tortor convallis. Mauris enim leo, pellentesque vel tincidunt non, vestibulum vitae purus. Suspendisse potenti. Fusce dignissim vitae tortor sit amet commodo. Vivamus id urna maximus, porta urna id, elementum tortor. Praesent imperdiet luctus gravida. Duis pretium augue et orci pulvinar, imperdiet ultricies risus rhoncus. Nunc mollis, sem et auctor eleifend, felis velit ornare sem, non imperdiet turpis urna a eros. Duis felis massa, volutpat at placerat sed, dapibus vel neque. Praesent ornare velit eget dolor vulputate dapibus. Donec non elementum diam. Ut pretium nibh id augue elementum venenatis.',
    'Vivamus varius tincidunt augue vulputate vulputate. Proin tortor elit, venenatis ac lectus finibus, maximus tincidunt ante. Aenean facilisis nibh nunc, vitae tempus enim congue vel. Phasellus accumsan mi urna, quis maximus est lobortis quis. Maecenas sollicitudin est id dolor facilisis elementum in vitae ex. Maecenas justo erat, vulputate eget dui id, fermentum dignissim sem. Nullam sagittis porta nunc, ut egestas arcu ultricies et. Vivamus vel metus ante. Proin nec nibh nunc. Suspendisse sit amet nisi neque. Nulla accumsan tincidunt ex.',

]
class Timeline {
    constructor(container, startYear, endYear, milestones) {
        this.container = container;
        this.startYear = startYear;
        this.endYear = endYear;
        this.milestones = milestones;
        this.selectedDate = null;

        this.initDates();
        this.initContent();
        this.addResizeListener();
    }
    initDates() {
        const datesFragment = document.createDocumentFragment();
        for (let year = this.startYear; year <= this.endYear; year++) {
            const dateDiv = document.createElement('div');
            dateDiv.className = 'date';
            dateDiv.innerHTML = `<p>${year}</p><div class="line"></div>`;
            dateDiv.addEventListener('click', () => this.handleDateClick(year));
            datesFragment.appendChild(dateDiv);
        }
        const datesContainer = this.container.querySelector('.dates');
        datesContainer.appendChild(datesFragment);
        this.addTouchScrolling(datesContainer);
    }

    initContent() {
        const contentContainer = this.container.querySelector('.dates-content');
        const contentFragment = document.createDocumentFragment();

        for (let year = this.startYear; year <= this.endYear; year++) {
            const contentDiv = document.createElement('div');
            contentDiv.className = 'year-content';
            contentDiv.style.display = 'none';
            const milestone = this.milestones[(year - this.startYear) % this.milestones.length];
            contentDiv.innerHTML = `<h3>Milestone for ${year}</h3><p>${milestone}</p>`;
            contentFragment.appendChild(contentDiv);
        }

        contentContainer.appendChild(contentFragment);
    }
    

    
    addTouchScrolling(element) {
        let startX, currentX, moving = false;

        element.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
            moving = true;
        });

        element.addEventListener('touchmove', (e) => {
            if (!moving) return;
            currentX = e.touches[0].pageX;
            const deltaX = startX - currentX;
            element.scrollLeft += deltaX;
            startX = currentX;
        });

        element.addEventListener('touchend', () => {
            moving = false;
        });

        element.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }


    handleScroll() {
        const datesContainer = this.container.querySelector('.dates');
        const centerOfTimeline = datesContainer.getBoundingClientRect().left + datesContainer.getBoundingClientRect().width / 2;
    
        let closestYear = this.startYear;
        let minDistance = Infinity;
    
        const dates = this.container.querySelectorAll('.dates .date');
        dates.forEach((date, index) => {
            const year = this.startYear + index;
            const rect = date.getBoundingClientRect();
            const centerOfDate = rect.left + rect.width / 2;
            const distance = Math.abs(centerOfDate - centerOfTimeline);
    
            if (distance < minDistance) {
                minDistance = distance;
                closestYear = year;
            }
        });
    
        this.setSelectedDate(closestYear - this.startYear);
        this.showContent(closestYear - this.startYear);
    }
    
    


    handleDateClick(year) {
        const index = year - this.startYear;
        this.setSelectedDate(index, true); // Pass true to center the date
        this.showContent(index);
    }


    setSelectedDate(index, center = false) {
        const dates = this.container.querySelectorAll('.dates .date');
        if (this.selectedDate !== null) {
            this.selectedDate.classList.remove('selected');
        }
        this.selectedDate = dates[index];
        this.selectedDate.classList.add('selected');
    
        if (center) {
            this.centerDateItem(this.selectedDate);
        }
    }
    

    showContent(index) {
        const contents = this.container.querySelectorAll('.dates-content .year-content');
        contents.forEach((content, idx) => {
            content.style.display = idx === index ? 'block' : 'none';
        });
    }
    

    centerDateItem(item) {
        const datesContainer = this.container.querySelector('.dates');
        const containerRect = datesContainer.getBoundingClientRect();
        const scrollPosition = item.offsetLeft + item.offsetWidth / 20 - containerRect.width / 1.8;
        const maxScrollLeft = datesContainer.scrollWidth - containerRect.width;
        datesContainer.scrollTo({
            left: Math.min(Math.max(scrollPosition, 0), maxScrollLeft),
            behavior: 'smooth'
        });
    }

    addResizeListener() {
        window.addEventListener('resize', () => {
            if (this.selectedDate) {
                this.centerDateItem(this.selectedDate);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.querySelector('.timeline');
    const currentYear = new Date().getFullYear();
    const startYear = 1994;

    const timeline = new Timeline(timelineContainer, startYear, currentYear, milestones);
    timeline.initContent();

    // Load middle date with content after initializing both dates and content
    const middleIndex = Math.floor((currentYear - startYear) / 2);
    const middleYear = startYear + middleIndex;
    timeline.handleDateClick(middleYear);
});
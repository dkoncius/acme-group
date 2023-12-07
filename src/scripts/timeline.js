const milestones = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nisi odio. Nunc semper ultricies libero a commodo. Nam non pellentesque est. Vivamus pharetra, nunc ac commodo tempus, tellus orci aliquam sapien, in pharetra nunc tellus sit amet dolor. Pellentesque dolor sem, hendrerit nec ultricies et, viverra nec quam. Pellentesque ultricies maximus mi, mattis maximus orci maximus at. Suspendisse potenti. Pellentesque maximus risus non dui ullamcorper ultricies.',
    'Cras diam odio, viverra ut efficitur nec, iaculis eu justo. Pellentesque placerat et sem dapibus cursus. Nam mattis turpis accumsan augue lacinia, in ultricies neque blandit. Maecenas in nulla faucibus, auctor nibh semper, lacinia ipsum. Aliquam finibus commodo ligula sit amet facilisis. Vestibulum non risus tempor, venenatis nibh at, ultricies metus. Sed gravida blandit nisl non tempor. Integer sed metus mauris. Proin ultricies pulvinar egestas. Maecenas semper in erat quis laoreet.',
    'Vivamus laoreet massa ut magna vehicula iaculis. Curabitur nec purus eget orci molestie tempor. Curabitur ac consequat diam, ac placerat turpis. Donec turpis lectus, suscipit posuere egestas nec, aliquam at ex. Ut lobortis a lectus tristique ultricies. Proin volutpat vel sapien vel facilisis. Phasellus nec ante vitae velit mollis tempus sed sed nulla. Phasellus molestie ligula a neque volutpat, sed molestie felis imperdiet. Mauris egestas faucibus eleifend. Aliquam eu viverra elit. Nunc vestibulum aliquam augue. Sed non cursus turpis. Vestibulum vulputate eget ex a consequat. Vivamus ut ornare nulla.',
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc suscipit mi id felis consequat, in elementum tortor convallis. Mauris enim leo, pellentesque vel tincidunt non, vestibulum vitae purus. Suspendisse potenti. Fusce dignissim vitae tortor sit amet commodo. Vivamus id urna maximus, porta urna id, elementum tortor. Praesent imperdiet luctus gravida. Duis pretium augue et orci pulvinar, imperdiet ultricies risus rhoncus. Nunc mollis, sem et auctor eleifend, felis velit ornare sem, non imperdiet turpis urna a eros. Duis felis massa, volutpat at placerat sed, dapibus vel neque. Praesent ornare velit eget dolor vulputate dapibus. Donec non elementum diam. Ut pretium nibh id augue elementum venenatis.',
    'Vivamus varius tincidunt augue vulputate vulputate. Proin tortor elit, venenatis ac lectus finibus, maximus tincidunt ante. Aenean facilisis nibh nunc, vitae tempus enim congue vel. Phasellus accumsan mi urna, quis maximus est lobortis quis. Maecenas sollicitudin est id dolor facilisis elementum in vitae ex. Maecenas justo erat, vulputate eget dui id, fermentum dignissim sem. Nullam sagittis porta nunc, ut egestas arcu ultricies et. Vivamus vel metus ante. Proin nec nibh nunc. Suspendisse sit amet nisi neque. Nulla accumsan tincidunt ex.'

]
document.addEventListener('DOMContentLoaded', () => {
    const datesContainer = document.querySelector('.dates');
    const contentContainer = document.querySelector('.dates-content');
    const currentYear = new Date().getFullYear();
    const startYear = 1994;

    // Function to center the date item
    const centerDateItem = (item) => {
        const itemRect = item.getBoundingClientRect();
        const containerRect = datesContainer.getBoundingClientRect();

        // Calculate the scroll position to center the item
        const scrollPosition = item.offsetLeft - containerRect.width / 2 + itemRect.width / 2;
        datesContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    };

    for (let year = startYear; year <= currentYear; year++) {
        // Create date element
        const dateDiv = document.createElement('div');
        dateDiv.className = 'date';
        dateDiv.innerHTML = `<p>${year}</p><div class="line"></div>`;
        datesContainer.appendChild(dateDiv);

        // Create content element (hidden by default)
        const contentDiv = document.createElement('div');
        contentDiv.className = 'year-content';
        contentDiv.style.display = 'none';

        // Use a milestone for each year, assuming the array has enough elements
        const milestoneIndex = year - startYear;
        if (milestones[milestoneIndex]) {
            contentDiv.innerHTML = `<h3>Milestone for ${year}</h3><p>${milestones[milestoneIndex]}</p>`;
        } else {
            contentDiv.innerHTML = `<h3>Milestone for ${year}</h3><p>No available milestone.</p>`;
        }

        contentContainer.appendChild(contentDiv);

        // Add event listener for each date
        dateDiv.addEventListener('click', () => {
            // Update active class for dates
            document.querySelectorAll('.dates .date').forEach(d => d.classList.remove('active'));
            dateDiv.classList.add('active');
            centerDateItem(dateDiv);

            // Show the corresponding content
            document.querySelectorAll('.dates-content .year-content').forEach((section, idx) => {
                section.style.display = (idx === milestoneIndex) ? 'block' : 'none';
            });
        });
    }

    // Initialize the first content section as visible
    if (contentContainer.children.length > 0) {
        contentContainer.children[0].style.display = 'block';
        datesContainer.children[0].classList.add('active');
        centerDateItem(datesContainer.children[0]);
    }
});



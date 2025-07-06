// Select all bundle boxes
const bundleBoxes = document.querySelectorAll('.bundle-box');

// Template for size/color options (used in JS for all bundles)
const optionsTemplate = `
  <div class="bundle-options">
    <div class="option-row">
      <span>#1</span>
      <select class="size-select">
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <select class="color-select">
        <option value="">colour</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
      </select>
    </div>
    <div class="option-row">
      <span>#2</span>
      <select class="size-select">
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <select class="color-select">
        <option value="">colour</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
      </select>
    </div>
  </div>
`;

// Add change listener to each radio input
bundleBoxes.forEach(box => {
  const radio = box.querySelector('input[type="radio"]');

  radio.addEventListener('change', () => {
    // Step 1: Clear all selections
    bundleBoxes.forEach(b => {
      b.classList.remove('selected');

      const existingOptions = b.querySelector('.bundle-options');
      if (existingOptions) {
        existingOptions.remove(); // Remove if already exists
      }
    });

    // Step 2: Add selected class to clicked box
    box.classList.add('selected');

    // Step 3: Inject dropdowns for selected bundle
    const bundleOptionsDiv = document.createElement('div');
    bundleOptionsDiv.innerHTML = optionsTemplate;
    const newOptions = bundleOptionsDiv.firstElementChild;

    // Add it after .bundle-content
    const content = box.querySelector('.bundle-content');
    content.insertAdjacentElement('afterend', newOptions);
  });
});
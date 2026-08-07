/**
 * Product bundle section
 * Vanilla JS, no dependencies. Adds the selected products to cart in one request.
 */
(function () {
  function formatMoney(cents) {
    // Default USD formatting. Adjust for your store's currency if needed.
    return '$' + (cents / 100).toFixed(2);
  }

  function initBundle(root) {
    var boxes = root.querySelectorAll('.bundle__checkbox');
    var totalEl = root.querySelector('[data-bundle-total]');
    var addBtn = root.querySelector('[data-bundle-add]');

    function updateTotal() {
      var total = 0;
      boxes.forEach(function (box) {
        if (box.checked) {
          total += parseInt(box.dataset.price, 10) || 0;
        }
      });
      if (totalEl) {
        totalEl.textContent = 'Total: ' + formatMoney(total);
      }
    }

    function addToCart() {
      var items = [];
      boxes.forEach(function (box) {
        if (box.checked) {
          items.push({ id: parseInt(box.dataset.variantId, 10), quantity: 1 });
        }
      });
      if (!items.length) {
        return;
      }

      addBtn.disabled = true;
      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: items })
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error('Add to cart failed');
          }
          return response.json();
        })
        .then(function () {
          document.dispatchEvent(
            new CustomEvent('bundle:added', { detail: { items: items } })
          );
          window.location.href = '/cart';
        })
        .catch(function () {
          addBtn.disabled = false;
        });
    }

    boxes.forEach(function (box) {
      box.addEventListener('change', updateTotal);
    });
    if (addBtn) {
      addBtn.addEventListener('click', addToCart);
    }

    updateTotal();
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-bundle]').forEach(initBundle);
  });
})();

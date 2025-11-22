/**
 * MGA Commission Revenue Forecaster Calculator
 * Interactive tool for calculating MGA net revenue
 */

(function() {
    'use strict';

    function initCalculator() {
        const calculator = document.getElementById('mga-calculator');
        if (!calculator) return;

        const gwpInput = calculator.querySelector('#gwp-input');
        const commissionInput = calculator.querySelector('#commission-input');
        const tpaFeesInput = calculator.querySelector('#tpa-fees-input');
        const calculateBtn = calculator.querySelector('#calculate-btn');
        const resultDiv = calculator.querySelector('#calculator-result');

        function calculate() {
            const gwp = parseFloat(gwpInput.value) || 0;
            const commissionRate = parseFloat(commissionInput.value) || 0;
            const tpaFees = parseFloat(tpaFeesInput.value) || 0;

            if (gwp <= 0 || commissionRate < 0 || commissionRate > 100) {
                resultDiv.innerHTML = '<p class="calculator-error">Please enter valid values. GWP must be greater than 0, and commission rate must be between 0-100%.</p>';
                return;
            }

            const commission = gwp * (commissionRate / 100);
            const netRevenue = commission - tpaFees;
            const netMargin = (netRevenue / gwp) * 100;

            resultDiv.innerHTML = `
                <div class="calculator-results">
                    <h3>Revenue Forecast</h3>
                    <table class="calculator-table">
                        <tr>
                            <td>Gross Written Premium (GWP):</td>
                            <td><strong>£${gwp.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong></td>
                        </tr>
                        <tr>
                            <td>Commission Revenue (${commissionRate}%):</td>
                            <td><strong>£${commission.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong></td>
                        </tr>
                        <tr>
                            <td>TPA Fees:</td>
                            <td>£${tpaFees.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        </tr>
                        <tr class="result-row">
                            <td>Net Revenue:</td>
                            <td><strong>£${netRevenue.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong></td>
                        </tr>
                        <tr>
                            <td>Net Margin:</td>
                            <td><strong>${netMargin.toFixed(2)}%</strong></td>
                        </tr>
                    </table>
                    <p class="calculator-note"><small>Note: FacioMGA tracks this in real-time across all binders and products.</small></p>
                </div>
            `;
        }

        calculateBtn.addEventListener('click', calculate);
        
        // Calculate on Enter key
        [gwpInput, commissionInput, tpaFeesInput].forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    calculate();
                }
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCalculator);
    } else {
        initCalculator();
    }
})();


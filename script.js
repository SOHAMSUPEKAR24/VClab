// Experiment 1: Determine strength of strong acid using pH meter
function calculatePH() {
    const concentration = parseFloat(document.getElementById('acid-concentration').value);
    
    if (concentration > 0) {
        const pH = -Math.log10(concentration);
        document.getElementById('result').textContent = `The pH of the solution is: ${pH.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = "Please enter a valid concentration.";
    }
}

// Experiment 2: Titration of weak and strong acid mixture with strong base (Conductometry)
function calculateTitration() {
    const weakAcidVolume = parseFloat(document.getElementById('weak-acid-volume').value);
    const strongAcidVolume = parseFloat(document.getElementById('strong-acid-volume').value);
    const baseConcentration = parseFloat(document.getElementById('base-concentration').value);

    if (weakAcidVolume > 0 && strongAcidVolume > 0 && baseConcentration > 0) {
        // Simple calculation for demonstration
        const result = (weakAcidVolume + strongAcidVolume) * baseConcentration;
        document.getElementById('result').textContent = `Titration result: ${result.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = "Please enter valid volumes and concentration.";
    }
}

// Experiment 3: Determine hardness of water by EDTA method
function calculateHardness() {
    const waterSampleVolume = parseFloat(document.getElementById('water-sample-volume').value);
    const edtaVolume = parseFloat(document.getElementById('edta-volume').value);

    if (waterSampleVolume > 0 && edtaVolume > 0) {
        const hardness = edtaVolume / waterSampleVolume * 100; // Simplified calculation
        document.getElementById('result').textContent = `Water hardness: ${hardness.toFixed(2)} mg/L`;
    } else {
        document.getElementById('result').textContent = "Please enter valid values for the volumes.";
    }
}

// Experiment 4: Determine alkalinity of water
function calculateAlkalinity() {
    const acidVolume = parseFloat(document.getElementById('acid-volume').value);
    const baseVolume = parseFloat(document.getElementById('base-volume').value);

    if (acidVolume > 0 && baseVolume > 0) {
        const alkalinity = (baseVolume - acidVolume) * 50; // Simplified example
        document.getElementById('result').textContent = `Water alkalinity: ${alkalinity.toFixed(2)} mg/L`;
    } else {
        document.getElementById('result').textContent = "Please enter valid volumes for acid and base.";
    }
}

// Experiment 5: Extraction of lignin from lignocellulosic biomass
function performExtraction() {
    const biomassWeight = parseFloat(document.getElementById('biomass-weight').value);

    if (biomassWeight > 0) {
        const extractedLignin = biomassWeight * 0.3; // Simplified calculation
        document.getElementById('result').textContent = `Extracted lignin: ${extractedLignin.toFixed(2)} g`;
    } else {
        document.getElementById('result').textContent = "Please enter a valid biomass weight.";
    }
}

// Experiment 6: Use DOE software for bio-ethanol production optimization
function processOptimization() {
    // Placeholder as DOE is usually software-based
    document.getElementById('result').textContent = "Optimization process completed using DOE software.";
}

// Experiment 7: Interpretation of TGA Graph
function interpretTGA() {
    const initialMass = parseFloat(document.getElementById('initial-mass').value);
    const finalMass = parseFloat(document.getElementById('final-mass').value);

    if (initialMass > 0 && finalMass > 0) {
        const massLoss = ((initialMass - finalMass) / initialMass) * 100;
        document.getElementById('result').textContent = `Mass loss: ${massLoss.toFixed(2)}%`;
    } else {
        document.getElementById('result').textContent = "Please enter valid initial and final masses.";
    }
}

// Experiment 8: Electroplating copper on an iron plate
function electroplateCopper() {
    const copperSolutionConcentration = parseFloat(document.getElementById('copper-concentration').value);
    const time = parseFloat(document.getElementById('time').value);

    if (copperSolutionConcentration > 0 && time > 0) {
        const platingThickness = copperSolutionConcentration * time * 0.1; // Simplified calculation
        document.getElementById('result').textContent = `Copper plating thickness: ${platingThickness.toFixed(2)} micrometers`;
    } else {
        document.getElementById('result').textContent = "Please enter valid values for concentration and time.";
    }
}

// Experiment 9: Determine concentration using UV spectrophotometry
function determineConcentration() {
    const absorbance = parseFloat(document.getElementById('absorbance').value);
    const molarAbsorptivity = parseFloat(document.getElementById('molar-absorptivity').value);
    const pathLength = parseFloat(document.getElementById('path-length').value);

    if (absorbance > 0 && molarAbsorptivity > 0 && pathLength > 0) {
        const concentration = absorbance / (molarAbsorptivity * pathLength);
        document.getElementById('result').textContent = `Concentration: ${concentration.toFixed(2)} mol/L`;
    } else {
        document.getElementById('result').textContent = "Please enter valid values for absorbance, molar absorptivity, and path length.";
    }
}

// Experiment 10: Identify functional group using IR spectrum
function identifyFunctionalGroup() {
    const frequency = parseFloat(document.getElementById('frequency').value);

    if (frequency > 0) {
        // Example IR frequencies
        let group;
        if (frequency >= 2850 && frequency <= 3000) {
            group = "C-H (alkanes)";
        } else if (frequency >= 1600 && frequency <= 1680) {
            group = "C=C (alkenes)";
        } else {
            group = "Unknown functional group";
        }
        document.getElementById('result').textContent = `Functional group identified: ${group}`;
    } else {
        document.getElementById('result').textContent = "Please enter a valid frequency.";
    }
}

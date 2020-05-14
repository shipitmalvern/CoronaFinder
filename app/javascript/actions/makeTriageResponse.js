export const saveDemoData = (state) => {
    return {
        type: "UPDATE_DEMOGRAPHICS",
        state
    }
}

export const updateSymptoms = (state) => {
    return {
        type: "UPDATE_SYMPTOMS",
        state
    }
}
<script lang="ts">
    import { ModalIngredients } from '$components/layout-lp/v-one/index';
	import { 
        servingHead,
        amountServing,
        ingredientsList,
        vitaminList,
        bcaaList,
        nutritionDescription,
        ingredientsDescription,
        servingSuggestion,
        storage,
        warning
    } from '$contents/landing-page/v-one/isolate/index';
    
    let vitaminPin:boolean = true;
    let CollafitPin:boolean = false;
    let bcaaPin:boolean = true;
</script>

<ModalIngredients 
    modalType="Isolate-Modal"
    {vitaminPin}
    {CollafitPin}
    {bcaaPin}
    {servingHead}
    {amountServing}
    {ingredientsList}
    {vitaminList}
    {bcaaList}
    {nutritionDescription}
    {ingredientsDescription}
    {servingSuggestion}
    {storage}
    {warning}
/>
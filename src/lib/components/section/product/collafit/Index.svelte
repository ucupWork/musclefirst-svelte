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
    } from '$contents/landing-page/v-one/collafit/index';
    
    let vitaminPin:boolean = true;
    let CollafitPin:boolean = true;
    let bcaaPin:boolean = false;
</script>

<ModalIngredients 
    modalType="Collafit-Modal"
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
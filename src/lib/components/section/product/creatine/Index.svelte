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
    } from '$contents/landing-page/v-one/creatine/index';
    
    let vitaminPin:boolean = false;
    let CollafitPin:boolean = false;
    let bcaaPin:boolean = false;
</script>

<ModalIngredients 
    modalType="Creatine-Modal"
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
<template>
    
    <div>
        <ul>
            <li v-for="goal in goals" :key="goal">
                <slot :goal="goal" :anotherProps="'.....'"></slot>
            </li>
        </ul>
    </div>

</template>

<script>
export default{
    data(){
        return {
            goals:['Finish the course','vue is easy to learn']
        }
    }
}
</script>
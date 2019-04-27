Vue.directive('clickoutside',{
    bind : function(el, binding, vnode){
        function documentHandler(e){
            if(el.contains(e.target)){//点击元素在指令所在元素中，则什么都不做
                return false;
            }
            if(binding.expression){//指令存在表达式，则运行
                binding.value(e);
            }
        }
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
    },
    unbind : function(el, binding){
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
});
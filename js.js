var shinhan = function(){
	var common = {
		init : function(){
			common.checkbox();
		},
		checkbox : function(){
			$("input[type=checkbox]").each(function(){
				if ($(this).closest(".checkbox").length) return;
				var $this = $(this);
				var $wrap = $this.wrap("<span class='checkbox'></span>").closest(".checkbox");
				$this.on("change", function(){
					common.checkboxView($this, $this.prop("checked"));
				}).change();
				if ($this.hasClass("favorites")) {
					$wrap.addClass("favorites");
				}
				common.hover(this);
			});
		},
		checkboxView : function(obj, state){
			var $wrap = obj.closest(".checkbox");
			if (state){
				$wrap.addClass("checked");
			} else {
				$wrap.removeClass("checked");
			}
			common.disabled(obj[0]);
		},
		hover : function(obj){
			if (obj.hasAttribute("disabled")) return;
			if (!$(obj).closest("label").length){
				$(obj).on("mouseenter focusin", function(){
					$(obj).parent().addClass("hover");
				}).on("mouseleave focusout", function(){
					$(obj).parent().removeClass("hover");
				});
			}
			try {
				var $target = $(obj).closest("label").length ? $(obj).closest("label") : $("label[for="+$(obj).attr("id")+"]");
				$target.on("mouseenter focusin", function(){
					$(obj).parent().addClass("hover");
				}).on("mouseleave focusout", function(){
					$(obj).parent().removeClass("hover");
				});
			} catch (e) {}
		},
		disabled : function(obj){
			if (obj.hasAttribute("disabled")){
				$(obj).parent().addClass("disabled");
				//$(obj).closest("label").addClass("disabled");
				//$("label[for="+$(obj).attr("id")+"]").addClass("disabled");
			}
		},
	};
	return common;
}();
$(function(){
	shinhan.init();
});


	.section	__TEXT,__text,regular,pure_instructions
	.globl	_main
	.align	4, 0x90
_main:                                  ## @main
	.cfi_startproc
## BB#0:
	pushq	%rbp
Ltmp2:
	.cfi_def_cfa_offset 16
Ltmp3:
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
Ltmp4:
	.cfi_def_cfa_register %rbp
	subq	$64, %rsp
	leaq	L_.str(%rip), %rax
	movq	___stack_chk_guard@GOTPCREL(%rip), %rcx
	movq	(%rcx), %rcx
	movq	%rcx, -8(%rbp)
	movl	$0, -36(%rbp)
	movl	%edi, -40(%rbp)
	movq	%rsi, -48(%rbp)
	movq	%rax, %rdi
	movb	$0, %al
	callq	_printf
	leaq	L_.str1(%rip), %rdi
	leaq	-32(%rbp), %rsi
	movl	%eax, -52(%rbp)         ## 4-byte Spill
	movb	$0, %al
	callq	_scanf
	leaq	-32(%rbp), %rdi
	movl	%eax, -56(%rbp)         ## 4-byte Spill
	callq	_check_psswd
	cmpl	$0, %eax
	je	LBB0_2
## BB#1:
	leaq	L_.str2(%rip), %rdi
	movb	$0, %al
	callq	_printf
	movl	%eax, -60(%rbp)         ## 4-byte Spill
	jmp	LBB0_3
LBB0_2:
	leaq	L_.str3(%rip), %rdi
	movb	$0, %al
	callq	_printf
	movl	%eax, -64(%rbp)         ## 4-byte Spill
LBB0_3:
	movq	___stack_chk_guard@GOTPCREL(%rip), %rax
	movq	(%rax), %rax
	cmpq	-8(%rbp), %rax
	jne	LBB0_5
## BB#4:                                ## %SP_return
	movl	$0, %eax
	addq	$64, %rsp
	popq	%rbp
	retq
LBB0_5:                                 ## %CallStackCheckFailBlk
	callq	___stack_chk_fail
	.cfi_endproc

	.globl	_check_psswd
	.align	4, 0x90
_check_psswd:                           ## @check_psswd
	.cfi_startproc
## BB#0:
	pushq	%rbp
Ltmp7:
	.cfi_def_cfa_offset 16
Ltmp8:
	.cfi_offset %rbp, -16
	movq	%rsp, %rbp
Ltmp9:
	.cfi_def_cfa_register %rbp
	subq	$16, %rsp
	movq	%rdi, -8(%rbp)
	movl	$0, -12(%rbp)
	movq	-8(%rbp), %rdi
	leaq	L_.str4(%rip), %rsi
	callq	_strcmp
	cmpl	$0, %eax
	jne	LBB1_2
## BB#1:
	movl	$1, -12(%rbp)
LBB1_2:
	movl	-12(%rbp), %eax
	addq	$16, %rsp
	popq	%rbp
	retq
	.cfi_endproc

	.section	__TEXT,__cstring,cstring_literals
L_.str:                                 ## @.str
	.asciz	"Please Enter a Password <= 15 characters.. Dont hack me please ;) \n"

L_.str1:                                ## @.str1
	.asciz	"%s"

L_.str2:                                ## @.str2
	.asciz	"You are in!\n"

L_.str3:                                ## @.str3
	.asciz	"Nope try again!\n"

L_.str4:                                ## @.str4
	.asciz	"HelloWorld"


.subsections_via_symbols

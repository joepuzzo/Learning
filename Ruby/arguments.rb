
def foo(options = {})
    bar = ( options[:bar] || 'default')
    puts bar
end

foo
foo(bar: "HEY!")

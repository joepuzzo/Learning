//
//  ViewController.m
//  helloWorld_02
//
//  Created by Joe Puzzo on 2/20/14.
//  Copyright (c) 2014 Joe Puzzo. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)btnClick:(id)sender {
    if (ruaGeek)
    {
        _geekLabel.text = @"Yeah, you really are a geek";
        ruaGeek = false;
    }
    else
    {
        _geekLabel.text = @"No way! You definitely are a geek";
        ruaGeek = true;
    }
}
@end

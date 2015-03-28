//
//  ViewController.m
//  textFieldDemo
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
    _txtInput.delegate = self;
    _txtInput2.delegate = self;
    _txtInput3.delegate = self;
    _txtInput4.delegate = self;

    
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)goPressed:(id)sender {
    _lblOutput.text = _txtInput.text;
    [_txtInput resignFirstResponder];

}

-(BOOL)textFieldShouldReturn:(UITextField *)textField
{
    _lblOutput.text = textField.text;
    [textField resignFirstResponder];
    return true;
}
@end
